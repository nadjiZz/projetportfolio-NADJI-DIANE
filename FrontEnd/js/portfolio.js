// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:5678/api/works");
const portfolio = await reponse.json();

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
const btnTout = document.querySelector('.Tout');
btnTout.addEventListener("click", function(){
    const Tout = portfolio.filter(function(figure){
        return figure.title
    })
    console.log(Tout)
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




const usertorage = window.localStorage.getItem("user");
console.log(usertorage)
if (usertorage) {
  const deconect = document.querySelector(".login")
  deconect.innerText = "logout";
  deconect.addEventListener("click",function(){
    window.localStorage.removeItem("user")
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

// const log = document.querySelector(".submit-btn");
// log.addEventListener("click", function () {
//   if (log) {
//     localStorage.removeItem("token");
//     document.location = "http://127.0.0.1:5500/FrontEnd/index.html";
//   } else {
//     document.location.href = "http://127.0.0.1:5500/FrontEnd/login.html";
//   }
// });




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


  const  btnsupprimer = document.querySelectorAll(".fa-trash-can");
  for (let i = 0; i < btnsupprimer.length; i++) {
    btnsupprimer[i].addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);
      let id_supprimer = portfolio[i].id;
      console.log(id_supprimer);
      let monToken = localStorage.getItem("token");
      let response = fetch(`http://localhost:5678/api/works/${id_supprimer}`, {
        method: "DELETE",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${monToken}`,
        },
      });
      if (response) {
        alert("Photo supprimé avec succes");
      } 
      else {
        alert("Echec de suppression");
      }
    });
  }


  // Click sur le bouton de la modal modifier
// btn1.addEventListener("click", function () {
//   modal1_affich();
// });


// span.addEventListener("click", function () {
//   document.querySelector('.corps-modal').style.display = "grid";
//   document.querySelector('.ajout-photo').style.display = 'none';
//   document.querySelector('.titre-modal').innerText = 'Galerie photo'
//   document.querySelector('.valider-photo').style.display = 'none';
//   document.querySelector('.ajoutphoto').style.display = 'block';
//   document.querySelector('.supprimer-gallerie').style.display = 'block';
//   modal.style.display = "none";
// });
// window.addEventListener('click', function(event) {
//   if(event.target == modal){
//     modal.style.display = "none";
//   }
// })

// // GESTION DE LA MODAL DU BOUTON AJOUTER PHOTO
// const btn_ajoutphoto = document.querySelector(".ajoutphoto");
// btn_ajoutphoto.addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector('.titre-modal').innerText = 'Ajout photo'
//   console.log("click reussi");
//   document.querySelector('.ajout-photo').style.display = 'flex';
//   document.querySelector('.valider-photo').style.display = 'block';
//   document.querySelector('.ajoutphoto').style.display = 'none';
//   document.querySelector('.supprimer-gallerie').style.display = 'none';
// ;
// });