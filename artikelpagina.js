onload = function () {
	/*menu (nav) zoeken (met queryselector in de header die een direct kind is van de body) */ 
	var hetMenu = document.querySelector("body > header nav");
	
	/* als er op het menu geklikt wordt, dan wordt de functie menuToggle uitgevoerd */ 
	hetMenu.addEventListener("click", menuToggle);
}

function menuToggle () {
	/*body element zoeken (met querySelector) - er is er maar 1 */
	var deBody = document.querySelector("body");
	
	/* aan het classlist object van de body (overzicht van de klassen van het body element)
	... de klas "navigatie" toevoegen of weghalen (met toggle - add/remove gecombineerd) */ 
	deBody.classList.toggle("navigatie");
	/* even kijken of het is gelukt */
	console.log(deBody.classList);
}