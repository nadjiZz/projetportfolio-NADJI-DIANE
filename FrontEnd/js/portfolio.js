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



for (let i = 0; i < portfolio.length; i++) {
  // Création des balises
  const sectionPortfolio = document.querySelector(".modal-content");
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