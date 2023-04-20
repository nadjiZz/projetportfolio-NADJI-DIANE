// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('http://localhost:5678/api/works');
const portfolios = await reponse.json();
console.log(portfolios);

for (let i = 0; i < portfolios.length; i++) 
{
//const sectionPortfolio = document.querySelector("#portfolio");
const sectionPortfolio = document.querySelector(".gallery");

const imageElement = document.createElement("img");
const sectionprojet = document.createElement("figure");
imageElement.src = portfolios[i].imageUrl;
const nomElement = document.createElement("p");
nomElement.innerText = portfolios[i].title;

sectionPortfolio.appendChild(sectionprojet);
sectionprojet.appendChild(imageElement);
sectionprojet.appendChild(nomElement);
}