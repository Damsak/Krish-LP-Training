const Storage = require('./Storage');

class Pharmacy {
    
    constructor(Medicine, MedicalInventory = []) {
        this.Medicine = Medicine;

        var frontInventory = new Storage('Front Inventory', MedicalInventory.frontInventory);
        var backInventory = new Storage('Back Inventory', MedicalInventory.backInventory);
        var distributor = new Storage('Distributor Inventory', MedicalInventory.distributor);
        var centralInventory = new Storage('Central Inventory', MedicalInventory.centralInventory);


        //we want start at front inventory.
        this.storage = frontInventory;
        //If the item is not available in Front inventory, look in backInventory 
        frontInventory.setNext(backInventory);
        //If the item is not available in back inventory, look in distributor 
        backInventory.setNext(distributor);
        //If the item is not available in distributor, look in Central Inventory 
        distributor.setNext(centralInventory);

    }

    find(itemName) {
     return this.storage.find(itemName)
    }


}

module.exports = Pharmacy