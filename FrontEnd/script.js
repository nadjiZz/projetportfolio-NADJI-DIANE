// Variables:
const token = sessionStorage.getItem('token');  
const bouttonsModifier =  document.querySelectorAll(".boutonModifier");
const logOut = document.getElementById("logout");

// Récupération des works depuis l'Api
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

 export function genererWorks(works) {
    for (let i = 0; i < works.length; i++) {
        const work = works[i];
        const sectionGallery = document.querySelector(".gallery");
        const workElement = document.createElement("figure");
        workElement.id = "projet"+[i+1];
        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.crossOrigin = "cross-origin";
        const figcaptionElement = document.createElement("figcaption");
        figcaptionElement.innerHTML = work.title;

        sectionGallery.appendChild(workElement);
        workElement.appendChild(imageElement);
        workElement.appendChild(figcaptionElement);
    }
}   
genererWorks(works);

// Gestion des bouttons des filtres
// Création des variables 
const bouttonTous = document.querySelector(".bouttonTous");
const bouttonObjets = document.querySelector(".bouttonObjets");
const bouttonAppartements = document.querySelector(".bouttonAppartements");
const bouttonHotelRestaurants = document.querySelector(".bouttonHotelRestaurants");
const allButtonFiltres = document.querySelectorAll(".button_filtre");

//boutton Tous
bouttonTous.addEventListener("click", () => {
    styleButtonFiltresDefaut();
    styleButtonFiltresClique(bouttonTous);
     document.querySelector(".gallery").innerHTML = "";
     genererWorks(works);
  })

// boutton Objets
 bouttonObjets.addEventListener("click", () => {
   const  worksFiltrees = works.filter(function (work) {
        return work.category.name === "Objets";
    });
    styleButtonFiltresDefaut();
    styleButtonFiltresClique(bouttonObjets);
    document.querySelector(".gallery").innerHTML = "";
    genererWorks(worksFiltrees);
 })

 // boutton Appartements
 bouttonAppartements.addEventListener("click", () => {
    const  worksFiltrees = works.filter(function (work) {
         return work.category.name === "Appartements";
     });
     styleButtonFiltresDefaut();
     styleButtonFiltresClique(bouttonAppartements);
     document.querySelector(".gallery").innerHTML = "";
     genererWorks(worksFiltrees);
    })
 // boutton Hôtels & restaurants
 bouttonHotelRestaurants.addEventListener("click", () => {
    const  worksFiltrees = works.filter(function (work) {
         return work.category.name === "Hotels & restaurants";
     });
     styleButtonFiltresDefaut();
     styleButtonFiltresClique(bouttonHotelRestaurants);
     document.querySelector(".gallery").innerHTML = "";
     genererWorks(worksFiltrees);
    })

// Style des bouttons par defaut
function styleButtonFiltresDefaut() {
    allButtonFiltres.forEach(button => {
        button.style.backgroundColor = "white";
        button.style.color = "#1D6154"
    });
};

// Style des bouttons cliqué
function styleButtonFiltresClique (e) {
    e.style.backgroundColor = "#1D6154";
    e.style.color = "white"
};
// Vérification du token

function verifToken () {
    if (token) {
        // document.getElementById('logout').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    }
}
verifToken();

// Suppression de userId et token
    logOut.addEventListener("click",function (){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        logOut.style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('headerEdition').style.display = 'none';
        document.querySelector('.filtres').style.display = 'flex';
        for (let i = 0; i < bouttonsModifier.length; i++) {
            bouttonsModifier[i].style.display ='none';
        }
    })


//Affichage mode édition

function affichageModeEdition () {
    if (token) {
        //affichage headerEdition
        document.getElementById('headerEdition').style.display = '';
        //affichage des bouttons modifier
        for (let i = 0; i < bouttonsModifier.length; i++) {
                bouttonsModifier[i].style.display ='';
            }
        }
};
affichageModeEdition();