
class Storage {
    constructor(name, MedicalInventory = []) {
        this.name = name;
        this.MedicalInventory = MedicalInventory;
        this.next = null;
    }

    //start loop through and find the item
    SearchInventory(ItemName) {        
        var index = this.MedicalInventory.map(item => item.Medicine).indexOf(ItemName);
        return this.MedicalInventory[index];
    }

    //if we dont have it. we need to look in the next inventory
    setNext(storage) {
        this.next = storage;
    }

    find(ItemName) {
        //see if we actually found it
        var found = this.SearchInventory(ItemName);

        if(found) {
            return {
                Medicine: found.Medicine,
                Quantity: found.quantity,
                location: this.name
            } 
        } else if (this.next) {
            return this.next.find(ItemName);
        } else {
            return "Medicine not available"
        }

    }


}
module.exports = Storage