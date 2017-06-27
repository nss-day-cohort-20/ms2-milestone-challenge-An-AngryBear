CarLot.Inventory.loadInventory(CarLot.CardBuilder.buildCard);

const outputContainer = document.getElementById("container"),
	inputBox = document.getElementById("input-box");

inputBox.addEventListener("keyup", function() {
	CarLot.CardBuilder.changeDescription();
})