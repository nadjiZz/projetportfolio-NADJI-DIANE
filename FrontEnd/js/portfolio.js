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
    const Tout = portfolio.filter(function(figure){
        return figure.title
    })
    document.querySelector(".gallery").innerHTML = "";
    generer(Tout)
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




const usertorage = window.localStorage.getItem("token");
if (usertorage) {
  const deconect = document.querySelector(".login")
  deconect.innerText = "logout";
  deconect.addEventListener("click",function(){
    window.localStorage.removeItem("token")
    deconect.removeAttribute('href')
    deconect.setAttribute('href','/index.html')
  })
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
  localStorage.removeItem("token");
    
    } else {
      const editer =document.getElementById("edition");
      editer.style.display = "none";
    }



// Get the modal
const modal = document.getElementById ("ensmble")
const modall = document.getElementById("myModal");
const modalll = document.getElementById("myModall")
// Get the button that opens the modal
const btn3 = document.getElementById("myBtn3");
const btn4 = document.getElementById("ajoutphoto")
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn3.onclick = function () {
  modal.style.display = "block";
  modall.style.display = "block";
  modalll.style.display = "none"
}
btn4.onclick = function () {
  modal.style.display = "block";
  modall.style.display = "none";
  modalll.style.display = "block"
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
Window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal element
for (let i = 0; i < portfolio.length; i++) {
  // Création des balises
  const sectionPortfolio = document.querySelector(".modal-content");
  const sectionProjet = document.createElement("figure");
  const imageElement = document.createElement("img");
  imageElement.src = portfolio[i].imageUrl;
  const nomElement = document.createElement("p");
  nomElement.innerText = "editer";
  const iconesup = document.createElement("i");
  iconesup.classList.add("fa-solid", "fa-trash-can");
 


  //Rattachement de nos balises au DOM
  sectionPortfolio.appendChild(sectionProjet);
  sectionProjet.appendChild(imageElement);
  sectionProjet.appendChild(nomElement);
  sectionProjet.appendChild(iconesup);
}

window.addEventListener('keydown', function(e){
  if(e.key === 'Escape'|| e.key === 'Esc'){
      closeMoadal(e)
  }
})
	// // Get the modal
  // const modal = document.getElementsByClassName("ensemble")
  // const modal1 = document.getElementById("myModal");
  // // Get the button that opens the modal
  // const btn = document.getElementById("myBtn3");
  // // Get the <span> element that closes the modal
  // const span = document.getElementsByClassName("close")[0];
  // // When the user clicks on the button, open the modal
  // btn.onclick = function () {
  //   modal.style.display = "grid";
  //   modal1.style.display = "blok";

  // }
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // }
  // // When the user clicks anywhere outside of the modal, close it
  // Window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
  
	// // Get the modal element
  // for (let i = 0; i < portfolio.length; i++) {
  //   // Création des balises
  //   const sectionPortfolio = document.querySelector(".modal-content");
  //   const sectionProjet = document.createElement("figure");
  //   const imageElement = document.createElement("img");
  //   imageElement.src = portfolio[i].imageUrl;
  //   const nomElement = document.createElement("p");
  //   nomElement.innerText = "editer";
  //   const iconesup = document.createElement("i");
  //   iconesup.classList.add("fa-solid", "fa-trash-can");
  //   //Rattachement de nos balises au DOM
  //   sectionPortfolio.appendChild(sectionProjet);
  //   sectionProjet.appendChild(imageElement);
  //   sectionProjet.appendChild(nomElement);
  //   sectionProjet.appendChild(iconesup);
    

  // }

// Suppression d'une image de la galerie
  // const  btnsupprimer = document.querySelectorAll(".fa-trash-can");
  // for (let i = 0; i < btnsupprimer.length; i++) {
  //   btnsupprimer[i].addEventListener("click", (event) => {
  //     event.preventDefault();
  //     const id_supprimer = portfolio[i].id;
  const galerie = document.querySelector('.gallerie')
  galerie.addEventListener('click',function(e){
    if(e.target.classList.closes)
  })
      const monToken = localStorage.getItem("token");
      // Envoie d'une requete pour supprimer l'element 
      fetch(`http://localhost:5678/api/works/${id_supprimer}`, {
        method: "DELETE",
        headers: {"Authorization": `Bearer ${monToken}`}
    }).then(function(sup){
      if (sup.ok) {
        alert("Photo supprimé avec succes");
      } 
      else {
        alert("Echec de suppression");
      }
    })
   
    });
  }

// GESTION DE LA MODAL DU BOUTON AJOUTER PHOTO
const btn_ajoutphoto = document.querySelector(".ajout-photo");
btn_ajoutphoto.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector('.ajout-photo').style.display = 'flex';
  document.querySelector('.valider-photo').style.display = 'block';

});