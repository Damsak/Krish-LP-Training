
class Plant {
    constructor(name){
        this.name = name
    }
}

class PlantBuilder {

    constructor(name) {
        this.plant = new Plant(name) //create a plant with a given name
    }

    setAge(age) {
        this.plant.age = age
        return this //return the builder object
    }

    setLocation(location) {
        this.plant.location = location
        return this
    }

    setCategory(subcategory,species) {
        this.plant.subcategory = subcategory
        this.plant.species = species
        return this
    }

    setResearch(researchUnit,scientist) {
        this.plant.researchUnit = researchUnit
        this.plant.scientist = scientist
        return this
    }

    build() {
        return this.plant
    }  

}

let SecondPlant = new PlantBuilder('Grass').setAge('2').setResearch('4','John Dore').build()
console.log(SecondPlant)
