
function Patient(name,nic,location) {

    //creates a patient object that delegates the to covidFacilities in the case of a fail lookup
    let patient = Object.create(Patient.prototype)
    patient.name = name
    patient.nic = nic
    patient.location = location


return patient;

}

Patient.prototype.watchTv = function ()
 {
    console.log(`${this.name} is Watching TV`)
 }

 Patient.prototype.playGames = function ()
 {
    console.log(`${this.name} is Playing Games`)
 }

 Patient.prototype.readBooks = function ()
 {
    console.log(`${this.name} is Reading Books`)
 }




const John = Patient("John",1234,"Colombo")
const Tom = Patient("Tom",4455,"Malabe")

Tom.playGames();
John.readBooks();
