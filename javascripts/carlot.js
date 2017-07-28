var CarLot = (function (globalScopeCarLot) {

  let _car_inventory = [];

  let inventory = Object.create(null);

  inventory.loadInventory = function(callback) {
    var load = new XMLHttpRequest();
    load.open("GET", "inventory.json");
    load.send();
    load.addEventListener("error", function() {
    });
    load.addEventListener("load", function () {
      processInventory()
      callback(_car_inventory[0]);
    });
  }

  function processInventory() {
    var inventoryObjects = JSON.parse(event.target.responseText).cars;
      _car_inventory.push(inventoryObjects);
  }

  function getInventory() {
    return _car_inventory;
  }

  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;
})(CarLot || {});