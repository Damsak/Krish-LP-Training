var Pharmacy = require ('./Pharmacy');
var MedicalInventory = require('./MedicalInventory.json');

var KandyPharmacy = new Pharmacy('Kandy City Center Pharmacy',MedicalInventory);

var searchItem = 'syrup10';
var results = KandyPharmacy.find(searchItem);

console.log(results);