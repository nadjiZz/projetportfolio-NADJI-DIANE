			// Get the modal
			const modal = document.getElementById("myModal");
			// Get the button that opens the modal
			const btn = document.getElementById("myBtn");
			// Get the <span> element that closes the modal
			const span = document.getElementsByClassName("close")[0];
			// When the user clicks on the button, open the modal
			btn.onclick = function () {
				modal.style.display = "block";
			}
			// quand on clique sur le (x), le modal se ferme
			span.onclick = function () {
				modal.style.display = "none";
			}
			// Permet de ferme le modal en cliquant decu
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			// L'utilisateur clique decu por suprimer
            const supprimeElement = document.createElement("i");
            supprimeElement.classList.add('fa-solid, fa-trash-can');
            sectionProjet.appendChild(supprimeElement);



			