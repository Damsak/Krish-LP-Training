
class Research {
    constructor(researchUnit,scientist) {
        this.researchUnit = researchUnit
        this.scientist = scientist
    }
}
class Category {
    constructor(subcategory,species) {
        this.subcategory = subcategory
        this.species = species
    }
}

class Plant {
    constructor(name,age,location,category,research){
        this.name = name
        this.age = age
        this.location = location
        this.category = category
        this.research = research
    }
}

const plattwo = new Plant('Rose',undefined,undefined,new Category('4','Flowers'));
console.log(plattwo)