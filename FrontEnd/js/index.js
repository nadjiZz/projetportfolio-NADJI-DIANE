// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:5678/api/works");
const portfolio = await reponse.json();

// Création des elements du DOM et ajout des travaux à la galerie
function generer (portfolio) {
for (let i = 0; i < portfolio.length; i++) {
  // Création des balises
  const sectionPortfolio = document.querySelector(".gallery");
  const sectionProjet = document.createElement("figure");
  const imageElement = document.createElement("img");
  imageElement.src = portfolio[i].imageUrl;
  const nomElement = document.createElement("p");
  nomElement.innerText = portfolio[i].title;

  //Rattachement de nos balises au DOM
  sectionPortfolio.appendChild(sectionProjet);
  sectionProjet.appendChild(imageElement);
  sectionProjet.appendChild(nomElement);
}
}
generer(portfolio);

//Création de boutons de filtrages par categorie
const btnTout = document.querySelector('.Tout');
btnTout.addEventListener("click", function(){
  const position = document.querySelector('.Tout')
    const Tout = portfolio.filter(function(figure){
        return figure.title
    })
    document.querySelector(".gallery").innerHTML = "";
    generer(Tout)
    console.log(Tout)
})

const btnObjet = document.querySelector('.Objet');
btnObjet.addEventListener("click", function(){
    const Objet = portfolio.filter(function(Objet){
      return Objet.categoryId === 1;
    })
    console.log(Objet)
    document.querySelector(".gallery").innerHTML = "";
    generer(Objet)
})

const btnAppart = document.querySelector('.Appart');
btnAppart.addEventListener("click", function(){
    const Appart = portfolio.filter(function(Appart){
      return Appart.categoryId === 2;
    })
    console.log(Appart)
    document.querySelector(".gallery").innerHTML = "";
    generer(Appart)
})

const btnHotel = document.querySelector('.Hotel');
btnHotel.addEventListener("click", function(){
    const Hotel = portfolio.filter(function(Hotel){
      return Hotel.categoryId === 3;
    })
    console.log(Hotel)
    document.querySelector(".gallery").innerHTML = "";
    generer(Hotel)
});



// Recuperation du token
const usertorage = window.localStorage.getItem("user");
const token=window.localStorage.getItem("token");
if (usertorage && token) {
  const deconect = document.querySelector(".login");
  deconect.innerText = "logaout";
  const btnn = document.querySelector(".group");
  btnn.style.display = "none";
  const btn1 = document.querySelector("#myBtn1");
  btn1.style.display = "block";
  const btn2 = document.querySelector("#myBtn2");
  btn2.style.display = "block";
  const btn3 = document.querySelector("#myBtn3");
  btn3.style.display = "block";
  const editer =document.getElementById("edition");
  editer.style.display = "flex";

  deconect.addEventListener("click",function(){
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userId');
  document.location.href="index.html"
  deconect.style.displaye = "none"
  btnn.style.display = "block";
  btn1.style.display = "none";
  const btn2 = document.querySelector("#myBtn2");
  btn2.style.display = "none";
  const btn3 = document.querySelector("#myBtn3");
  btn3.style.display = "none";
  editer.style.display = "none";
  localStorage.removeItem("token");
  })

// creation de la modale
const modal = document.getElementById ("ensmble");
const modall = document.getElementById("myModal");
const modalll = document.getElementById("myModall");

// les bbouttons permettant d'ouvrir la moadale
const Btn3 = document.getElementById("myBtn3");
const btn4 = document.getElementById("ajoutphoto");

// les bouttons permettant de fermer les modales
const quitter = document.getElementById("close");
const quitterr = document.getElementById("closer");

// Quand on clique sur 'x' la modale se ferme
quitter.onclick = function (){
  modal.style.display = "none";

}
quitterr.onclick = function (){
  modal.style.display = "none";
}
// Quand on clique sur une boutton modifier
Btn3.onclick = function () {
  modal.style.display = "block";
  modall.style.display = "block";
  modalll.style.display = "none"
}
btn4.onclick = function () {
  modal.style.display = "block";
  modall.style.display = "none";
  modalll.style.display = "block"
}

//quitter la modal en cliquant en dehors de la modale
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Quitter la modal part la touche Esc
window.addEventListener('keydown', function(e){
  if(e.key === 'Escape'|| e.key === 'Esc'){
    modal.style.display = "none";
  }
})
// Cliquer sur la fleche pour révenir sur la premiere modale
const retour = document.getElementById("left");
retour.onclick = function () {
  modal.style.display = "block";
  modall.style.display = "block";
  modalll.style.display = "none"
}

};

function modalElements(){
   // Get the modal element
for (let i = 0; i < portfolio.length; i++) {
  // Création des balises
  const sectionPortfolio = document.querySelector(".modal-content");
  const sectionProjet = document.createElement("figure");
  const imageElement = document.createElement("img");
  imageElement.src = portfolio[i].imageUrl;
  const nomElement = document.createElement("p");
  nomElement.innerText = "éditer";
  const iconSup = document.createElement("div");
  iconSup.className = ("iconSupp");
  iconSup.classList.add("fa-solid", "fa-trash-can");

  // iconSup.document.createElement("i");
  // // inconSup.appendChild(del);
   
  //Rattachement de nos balises au DOM
  sectionPortfolio.appendChild(sectionProjet);
  sectionProjet.appendChild(imageElement);
  sectionProjet.appendChild(nomElement);
  sectionProjet.appendChild(iconSup);
  };
}

modalElements()

//  --- Supprimer un projet ---
 const iconsDeleteProjet = document.querySelectorAll('.iconSupp');
 let id = 0;
 for (let i = 0; i < portfolio.length ; i++){
     iconsDeleteProjet[i].addEventListener("click",() => {
         const workId = portfolio.map(work => work.id);
         id = workId[i];
        // const projectId = portfolio[i].id
        // console.log(projectId)
         fetch(`http://localhost:5678/api/works/${id}`, {
         method: "DELETE",
         headers: {
             "Content-type": "application/json",
             "Authorization": "Bearer " + localStorage.getItem("token")
             },
         })
         .then(response => {
             if (response.ok) {
               // Supprimer l'élément dans la modale dynamiquement
               iconsDeleteProjet[i].parentNode.remove();
               // Supprimer l'élément dans la galerie dynamiquement
               const projet = document.getElementById(`projet${i+1}`);

              //  projet.replaceWith();
              //  generer();
              //  modalElements();
               location.reload(true)
             }
           })
           .catch(error => {
             console.log(error);
           });
     });
 };


const form = document.querySelector("#madall");
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

const titleForm = document.querySelector(".valider-photo")
titleForm.addEventListener("change",(event)=>{
    valeurTitleForm = event.target.value;
    verifValueFormSubmitProject()
});

const categorieForm = document.querySelector(".titre-categorie")
categorieForm.addEventListener("change",(event)=>{
    valeurCategorieForm = event.target.value;
    verifValueFormSubmitProject()
});

// --- Envoi du projet ---

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); 
//     let formData = new FormData();
//     formData.append('image',currentimage);
//     formData.append('title',title.value);
//     formData.append('category',categories[category.value]);
//      fetch(`http://localhost:5677/api/works`, {
//         method: "POST",
//         headers: {
//             "Authorization": "Bearer " + sessionStorage.getItem("token")
//         },
//         body: formData
//     }).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         alert("Projet envoyé !");
//         closeAllModal();
//         let i = works.length + 0;
//         const sectionGallery = document.querySelector(".gallery");
//         const workElement = document.createElement("figure");
//         workElement.id = "projet"+[i+0];
//         const imageElement = document.createElement("img");
//         imageElement.src = data.imageUrl;
//         imageElement.crossOrigin = "cross-origin";
//         const figcaptionElement = document.createElement("figcaption");
//         figcaptionElement.innerHTML = data.title;
    
//         sectionGallery.appendChild(workElement);
//         workElement.appendChild(imageElement);
//         workElement.appendChild(figcaptionElement);
//     }).catch((error)=>{
//       console.log(error)
//     });
//     currentimage = null;
//     titleForm.value = "";
//     categorieForm.value = "";
//     verifValueFormSubmitProject()
    
// });