var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];


  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null);

    inventory.loadInventory = function(callback) {
      var load = new XMLHttpRequest();
      load.open("GET", "inventory.json");
      load.send();
      load.addEventListener("error", function() {
        console.log("error retrieving data");
      });
      load.addEventListener("load", function () {
        processInventory()
        callback(_car_inventory[0]);
        console.log("in loadInventory, after load", _car_inventory);
      });
    }

    function processInventory() {
      var inventoryObjects = JSON.parse(event.target.responseText).cars;
        _car_inventory.push(inventoryObjects);
    }

    function getInventory() {
      console.log(_car_inventory);
      return _car_inventory;
    }


  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});