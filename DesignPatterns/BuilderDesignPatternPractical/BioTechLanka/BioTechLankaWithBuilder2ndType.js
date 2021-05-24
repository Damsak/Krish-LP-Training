
class Plant {
    constructor(name,{age,location,category,research} = {}){
        this.name = name
        this.age = age
        this.location = location
        this.category = category
        this.research = research
    }
}


let ThirdPlant = new Plant('Mango',{age:10, location:'Kandy'})
console.log(ThirdPlant);