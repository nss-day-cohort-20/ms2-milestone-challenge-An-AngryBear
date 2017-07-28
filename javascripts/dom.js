var CarLot = (function (globalScopeCarLot) {

	let cardBuilder = Object.create(null);

	cardBuilder.buildCard = function(arrayOfCars) {
		let counter = 0;
		let newRow;
		for(let i = 0, x = arrayOfCars.length; i < x; i++) {
			if (counter === 0) {
				newRow = document.createElement("div")
				newRow.setAttribute('class', 'row');
			} else if (counter >= 3) {
				counter = 0;
			}
			let newCard = document.createElement("div");
			newCard.setAttribute('class', 'col-md-4 add-border');
			counter++;
			newCard.innerHTML =
				`<h4 class="card-make">${arrayOfCars[i].year}, ${arrayOfCars[i].make}</h4>
				<h3 class="card-model">${arrayOfCars[i].model}</h3>
				<h4>$${arrayOfCars[i].price}</h4>
				<p class="description">${arrayOfCars[i].description}</p>`;
			newCard.addEventListener("click", function() {
				let highlighted = document.querySelectorAll(".highlight");
				for(let i = 0; i < highlighted.length; i++) {
					highlighted[i].classList.remove("highlight");
				}
				newCard.classList.add("highlight");
				inputBox.value = "";
				inputBox.focus();
			})
			newRow.appendChild(newCard);
			outputContainer.appendChild(newRow);
		}
	}

	cardBuilder.changeDescription = function() {
		let findHighlightClass = document.getElementsByClassName("highlight");
		if(findHighlightClass.length !== 0) {
			let changeDescriptionOf = findHighlightClass[0];
			let findDescription = changeDescriptionOf.getElementsByTagName('p')[0];
			if ((event.keyCode > 47 && event.keyCode < 58) ||
				(event.keyCode > 64 && event.keyCode < 91) ||
				(event.keyCode > 185 && event.keyCode < 193) ||
				(event.keyCode === 32)) {
				findDescription.innerHTML += event.key;
			} else if (event.key === "Backspace") {
				let deleteKey = findDescription.innerHTML.split(""),
					lastIndex = deleteKey.length -1;
				deleteKey = deleteKey.splice(0, lastIndex).join('');
				findDescription.innerHTML = deleteKey;
			}
		}
	}

	globalScopeCarLot.CardBuilder = cardBuilder;
	return globalScopeCarLot
})(CarLot || {});