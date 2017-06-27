// Loop over your array of cars and build up an HTML string to build
// a card for each car.

var CarLot = (function (globalScopeCarLot) {
	let cardBuilder = Object.create(null);
		cardBuilder.buildCard = function(arrayOfCars) {
			let counter = 0;
			let newRow;
			for(let i = 0, x = arrayOfCars.length; i < x; i++) {

				if (counter === 0) {
					newRow = document.createElement("div")
					newRow.setAttribute('class', 'row');
				}
				let newCard = document.createElement("div");
				newCard.setAttribute('class', '.col-md-4')
				counter++;
				// <div class="row">
  		// 		<div class="col-*-*"></div>
				newCard.innerHTML =
					`<h4 class="card-make">${arrayOfCars[i].year}, ${arrayOfCars[i].make}</h4>
					<h3 class="card-model">${arrayOfCars[i].model}</h3>
					<h4>$${arrayOfCars[i].price}</h4>
					<p>${arrayOfCars[i].description}</p>`;
				newRow.appendChild(newCard);
				outputContainer.appendChild(newRow);
				console.log(newRow);
			}
		}
	globalScopeCarLot.CardBuilder = cardBuilder;
	return globalScopeCarLot
})(CarLot || {});