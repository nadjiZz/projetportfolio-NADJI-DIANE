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



// // Recuperation du token
// const usertorage = window.localStorage.getItem("user");
// const token=window.localStorage.getItem("token");
// // localStorage.setItem('token',JSON.stringify('token'))
// if (usertorage && token) {
//   const deconect = document.querySelector(".login")
//   deconect.innerText = "logaout";

//   const btnn = document.querySelector(".group");
//     btnn.style.display = "none";
//     const btn1 = document.querySelector("#myBtn1");
//     btn1.style.display = "block";
//     const btn2 = document.querySelector("#myBtn2");
//     btn2.style.display = "block";
//     const btn3 = document.querySelector("#myBtn3");
//     btn3.style.display = "block";
//     const editer =document.getElementById("edition");
//     editer.style.display = "flex";

//   deconect.addEventListener("logout", (event) => {
//     window.localStorage.removeItem("token")

//     if( token === null ){
//       console.log("valider teste")
//     } 
  
//   });
  

//   deconect.addEventListener("click",function(){
//   sessionStorage.removeItem('token');
//   sessionStorage.removeItem('userId');
//   document.location.href="index.html"
//   deconect.style.displaye = "none"
//   btnn.style.display = "block";
//   btn1.style.display = "none";
//   const btn2 = document.querySelector("#myBtn2");
//   btn2.style.display = "none";
//   const btn3 = document.querySelector("#myBtn3");
//   btn3.style.display = "none";
//   editer.style.display = "none";
//   // localStorage.removeItem("token");
//   })
//     } else {
//       const editer =document.getElementById("edition");
//       editer.style.display = "none";
//     }


const token = window.localStorage.getItem("token");
if (token) {
  const deconect = document.querySelector(".login")
  deconect.innerText = "logout";
  deconect.addEventListener("click",function(){
    window.localStorage.removeItem("token")
    deconect.removeAttribute('href')
    deconect.setAttribute('href','/FrontEnd/index.html')
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
  // localStorage.removeItem("token");
    
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
const quitter = document.querySelectorAll(".close, .closer")[0];
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
  quitter.addEventListener('click',function(x){
  modal.style.display = "none";
  })
// When the user clicks anywhere outside of the modal, close it
modal.onclick = function (event) {
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
  const iconsup = document.createElement("i");
  iconsup.classList.add("fa-solid", "fa-trash-can");

  //  const workId = work.map(work => work.id);
  //     for (let i = 0; i < work.length; i++){
  //       iconsup.onclick = function () {            
  //           fetch(`http://localhost:5678/api/works/${id}`, {
  //           method: "DELETE", 
  //           headers: {
  //               "Content-type": "application/json",
  //               "Authorization": "Bearer " + sessionStorage.getItem("token")
  //               },
  //           })
  //           .then(response => {
  //               if (response.ok) {
  //                 // Supprimer l'élément dans la modale dynamiquement
  //                 iconsup[i].remove.cilck();
  //                 alert('photo supprimé avec succer')
  //                 // Supprimer l'élément dans la galerie dynamiquement
  //                 const work = document.getElementById(`work${i+1}`);
  //                 console.log(work);
  //                 work.replaceWith();
  //               }
  //               else {
  //                 alert("Echec de suppression");
  //               }
  //       });
  //   };
  // };

  //Rattachement de nos balises au DOM
  sectionPortfolio.appendChild(sectionProjet);
  sectionProjet.appendChild(imageElement);
  sectionProjet.appendChild(nomElement);
  sectionProjet.appendChild(iconsup);
}



window.addEventListener('keydown', function(e){
  if(e.key === 'Escape'|| e.key === 'Esc'){
      closeMoadal(e)
      console.log(e)
  }
})
	
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
  
	

// //Suppression d'une image de la galerie
//   const  btnsupprimer = document.querySelectorAll(".fa-trash-can");
//   for (let i = 0; i < btnsupprimer.length; i++) {
//     btnsupprimer[i].addEventListener("click", (event) => {
//       event.preventDefault();
//       const id_supprimer = portfolio[i].id;
//   const galerie = document.querySelector('.gallerie')
//   galerie.addEventListener('click',function(e){
//     if(e.target.classList.closes)
//       })
//    })
//   }

  // Envoie d'une requete pour supprimer l'element 

      



//       const monToken = localStorage.getItem("token");
//       // Envoie d'une requete pour supprimer l'element 
//       fetch(`http://localhost:5678/api/works/${id_supprimer}`, {
//         method: "DELETE",
//         headers: {"Authorization": `Bearer ${monToken}`}
//     }).then(function(sup){
//       if (sup.ok) {
//         alert("Photo supprimé avec succes");
//       } 
//       else {
//         alert("Echec de suppression");
//       }
//     })
   
//     });
//   }

// // GESTION DE LA MODAL DU BOUTON AJOUTER PHOTO
// const btn_ajoutphoto = document.querySelector(".ajout-photo");
// btn_ajoutphoto.addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector('.ajout-photo').style.display = 'flex';
//   document.querySelector('.valider-photo').style.display = 'block';

// });