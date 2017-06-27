// When your page first loads, you need to use an XHR to load
// the contents of the JSON file, and parse them into a native
// JavaScript object.

CarLot.Inventory.loadInventory(CarLot.CardBuilder.buildCard);
console.log("hello");
// CarLot.CardBuilder.buildCard(CarLot.Inventory.loadInventory());


const outputContainer = document.getElementById("container");


			// MODULES
// CARLOT

// DOM INTERACTOR

// STYLE MANIPULATOR




// Loop over your array of cars and build up an HTML string to build
// a card for each car. Also, use Bootstrap to create rows. Each row
// should contain 3 columns. Make sure you have a parent element with
// a class of `container`. __Hint:__ You must build up the entire
// string of columns/rows before injecting into the DOM. Use a counter
// variable to know when to close a row after three columns.

// Put a standard Bootstrap navbar element at the top of your page.

// Put a text input field in the navigation bar.

// Make sure you display all properties of the car in the DOM.
// Basic styling is up to you.

// Make sure that each car card element has a CSS class which adds a black border around it.

// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.

// Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).

// When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.
