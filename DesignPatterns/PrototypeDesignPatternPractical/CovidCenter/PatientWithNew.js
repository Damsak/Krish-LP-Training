function PatientWithNew(name,nic,location) {

    
    this.name = name
    this.nic = nic
    this.location = location


return this

}

PatientWithNew.prototype.watchTv = function ()
 {
    console.log(`${this.name} is Watching TV`)
 }

 PatientWithNew.prototype.playGames = function ()
 {
    console.log(`${this.name} is Playing Games`)
 }

 PatientWithNew.prototype.readBooks = function ()
 {
    console.log(`${this.name} is Reading Books`)
 }


const John = new PatientWithNew("John",1234,"Colombo")
const Tom = new PatientWithNew("Tom",4455,"Malabe")

Tom.playGames();
John.readBooks();

