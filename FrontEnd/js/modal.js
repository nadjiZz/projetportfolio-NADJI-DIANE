import { genererWorks} from "./script.js";

// --- Variables ---
const modalWrapper = document.querySelectorAll('.modal_wrapper');
const modalProjets = document.querySelector('#modal_projets');
const modalAjoutProjets = document.querySelector('#modal_ajout_projets');
const buttonOpenModalProjets = document.querySelector('#button_open_modal_projets');
const buttonCloseModalProjets = document.querySelectorAll('.button_close_modal');
const buttonRemoveAllGalerry = document.querySelector('.button_supprimer_galerie');
const buttonOpenModalAjoutProjets = document.querySelector('#button_open_modal_ajout_produits');
const buttonReturn = document.querySelector('.button_return');
const body = document.querySelector('body');
const divProjets = document.querySelector(".projets");
const formulaireImageAvant = document.querySelector(".avant");
const formulaireImageApres = document.querySelector(".apres");
const buttonSubmitProjet = document.querySelector("#submit_form_ajout_projets");
const titleForm = document.querySelector('#title');
const categorieForm = document.querySelector('#category');

const categories = {
    "": 0,
    "Objets": 1,
    "Appartements": 2,
    "Hôtels & restaurants": 3
  };


// --- Afficher la modale Projets ---
buttonOpenModalProjets.addEventListener("click", (e) => {
        openModal(e);  
    });

// ---  function Open Modal ---   
function openModal() {

    modalProjets.style.display = 'flex';
    modalProjets.removeAttribute('aria-hidden');
    modalProjets.setAttribute('aria-model', 'true');
    injectedWorksInModalProjets(works);
    modalWrapper.forEach(button => button.addEventListener("click", stopPropagation));
    
    // --- Supprimer un projet ---
    const iconsDeleteProjet =  document.querySelectorAll('.div_logo_delete_projet');
    let id = 0;
    for (let i = 0; i < iconsDeleteProjet.length ; i++){
        iconsDeleteProjet[i].addEventListener("click",(e) => {
            
            const workId = works.map(work => work.id);
            id = workId[i];
            fetch(`http://localhost:5678/api/works/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem("token")
                },
            })
            .then(response => {
                if (response.ok) {
                  // Supprimer l'élément dans la modale dynamiquement
                  iconsDeleteProjet[i].parentNode.remove();
                  // Supprimer l'élément dans la galerie dynamiquement
                  const projet = document.getElementById(`projet${i+1}`);
                  console.log(projet);
                  projet.replaceWith();
                }
              })
              .catch(error => {
                console.error(error);
              });
        });
   
    };
};

// --- Supprimer la galerie en ENTIERE --- !!!
buttonRemoveAllGalerry.addEventListener("click", () => {
    let id = 0;
    const workId = works.map(work => work.id);
    for (let i = 0; i < works.length; i++) {
        id = workId[i];
        fetch(`http://localhost:5678/api/works/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem("token")
            },
        })
        .then(response => {
            if (response.ok) {
              // Supprimer l'élément dans la modale dynamiquement
              const projetModal = document.getElementById(`projetModal${i+1}`);
              projetModal.replaceWith();
              // Supprimer l'élément dans la galerie dynamiquement
              const projet = document.getElementById(`projet${i+1}`);
              console.log(projet);
              projet.replaceWith();
            }
          })
          .catch(error => {
            console.error(error);
          });
    };
});  

// --- Ajout d'un projet --- 
const form = document.querySelector("#formModal2");
const inputImage = document.getElementById("image");
let currentimage = null;

inputImage.addEventListener("change",(event)=>{
    currentimage = event.target.files[0];
// ---  Remplacement de l'image dans le formulaire d'ajout ---
if (currentimage != null) {
    formulaireImageAvant.style.display ="none";
    formulaireImageApres.style.display ="flex";
    formulaireImageApres.innerHTML = '<img src="' + URL.createObjectURL(currentimage) +'" class= "imageFormulaireApres">';
    verifValueFormSubmitProject()
} else {
    formulaireImageAvant.style.display ="flex";
    formulaireImageApres.style.display ="none";
    buttonSubmitProjet.style.backgroundColor = "#A7A7A7";
}
})

// --- Changement d'état du boutton valider ---
let valeurTitleForm = null;
let valeurCategorieForm = null;

titleForm.addEventListener("change",(event)=>{
    valeurTitleForm = event.target.value;
    verifValueFormSubmitProject()
});
categorieForm.addEventListener("change",(event)=>{
    valeurCategorieForm = event.target.value;
    verifValueFormSubmitProject()
});

// --- Envoi du projet ---

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let formData = new FormData();
    formData.append('image',currentimage);
    formData.append('title',title.value);
    formData.append('category',categories[category.value]);
     fetch(`http://localhost:5678/api/works`, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("token")
        },
        body: formData
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        alert("Projet envoyé !");
        closeAllModal();
        let i = works.length + 1;
        const sectionGallery = document.querySelector(".gallery");
        const workElement = document.createElement("figure");
        workElement.id = "projet"+[i+1];
        const imageElement = document.createElement("img");
        imageElement.src = data.imageUrl;
        imageElement.crossOrigin = "cross-origin";
        const figcaptionElement = document.createElement("figcaption");
        figcaptionElement.innerHTML = data.title;
    
        sectionGallery.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(figcaptionElement);
    }).catch((error)=>{
        alert(error)
    });
    currentimage = null;
    titleForm.value = "";
    categorieForm.value = "";
    verifValueFormSubmitProject()
    
});

// --- Fermer les modales ---
buttonCloseModalProjets.forEach(button => button.addEventListener("click", (e) => {
    e.preventDefault(); 
    closeAllModal()
}));

// --- Stop Propagation --- 
function stopPropagation (e) {
    e.stopPropagation()
}

// --- Function Injecter les projets dans la modale Projets ---
// --- Récupération des works depuis l'Api ---
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

function injectedWorksInModalProjets (works) {
    for (let i = 0; i < works.length; i++){
        const work = works[i];
        const divProjets = document.querySelector(".projets");

        const workElement = document.createElement("figure");
        workElement.id = "projetModal"+[i+1];

        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.crossOrigin = "cross-origin";
        imageElement.style.width = "75px";
        imageElement.style.height = "100px";

        const divDeleteImageElement = document.createElement("div");
        divDeleteImageElement.className = "div_logo_delete_projet";

        const iconeDeleteImageElement = document.createElement("i");
        iconeDeleteImageElement.className = "fa-regular fa-trash-can icone_delete_projet";

        const editerElement = document.createElement("p");
        editerElement.innerText = "éditer";

        divProjets.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(editerElement);
        workElement.appendChild(divDeleteImageElement);
        divDeleteImageElement.appendChild(iconeDeleteImageElement);
    }
};

// --- Ouvrire la modale Ajout Projet ---
buttonOpenModalAjoutProjets.addEventListener("click", () => {
    modalProjets.style.display = 'none';
    modalProjets.setAttribute('aria-hidden', 'true');
    modalProjets.removeAttribute('aria-model');
    divProjets.innerHTML ="";
    modalAjoutProjets.style.display = 'flex';
    modalAjoutProjets.removeAttribute('aria-hidden');
    modalAjoutProjets.setAttribute('aria-model', 'true');

});

// --- Boutton return fléché ---
buttonReturn.addEventListener("click", (e) => {
    e.preventDefault(); 
    modalProjets.style.display = 'flex';
    modalProjets.removeAttribute('aria-hidden');
    modalProjets.setAttribute('aria-model', 'true');
    injectedWorksInModalProjets(works);
    modalAjoutProjets.style.display = 'none'; 
    modalAjoutProjets.setAttribute('aria-hidden', 'true');
    modalAjoutProjets.removeAttribute('aria-model');
    formulaireImageAvant.style.display ="flex";
    formulaireImageApres.style.display ="none";
})

// --- function verif des valeurs du formulaire d'envoi ---
function verifValueFormSubmitProject() {
    if (valeurTitleForm && valeurCategorieForm && currentimage != null) {
        buttonSubmitProjet.style.backgroundColor = "#1D6154";
    }else{
        buttonSubmitProjet.style.backgroundColor = "#A7A7A7";
    }
};

// --- function fermer les modals --- 

function closeAllModal() {
    modalProjets.style.display = 'none'; 
    modalAjoutProjets.style.display = 'none'; 
    modalProjets.setAttribute('aria-hidden', 'true');
    modalProjets.removeAttribute('aria-model');
    modalAjoutProjets.setAttribute('aria-hidden', 'true');
    modalAjoutProjets.removeAttribute('aria-model');
    //--- reset les projets ! ---
    divProjets.innerHTML ="";
    currentimage = null;
    formulaireImageAvant.style.display ="flex";
    formulaireImageApres.style.display ="none";
};