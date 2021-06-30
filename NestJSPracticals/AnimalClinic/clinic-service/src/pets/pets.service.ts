import { Injectable } from '@nestjs/common';
import { Pet } from './pet.model';
import {v1 as uuid} from 'uuid';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';

@Injectable()
export class PetsService {

private pets: Pet[] = []

getAllPets() {
    return this.pets;
}

createPet(name: string, type: string, condition: string,){
    

    //here we use destruction. parameters come in same order. therefor they get assigned accordingly
    const Pet = {
        id:uuid(), // uuid helps to get a new id everytime when a pet gets created
        name,
        type,
        condition
    }

    this.pets.push(Pet)
    return Pet;

}

petSearch(petSearchDto:PetSearchDto) {

    console.log(petSearchDto);

    //use destruct to separate type and name
    const{type,name} = petSearchDto;


    let pets = this.getAllPets();


    //if user set the type
    if(type) {


    //filter pets with the given type
    pets = pets.filter(pet => pet.type === type)
    }

    //if user set the name
    if(name) {
    //filter pets with the given name
    pets = pets.filter(pet => pet.name.includes(name))
    console.log(pets)
    }

    return pets;

}

getPetById(id:string):Pet {
    const pets = this.getAllPets();
    return pets.find(pet => pet.id === id)
}

updatePet(petUpdatedto:PetUpdateDto): Pet{

    //SHOULD NOT GET PETS DIRECTLY. MUST ALWAYS USE ENCAPSULATION
    const {id,condition} = petUpdatedto;

    let pet = this.getPetById(id);
    pet.condition = condition   

    return pet;
}

deletePet(id:string) :boolean{
    let pets = this.getAllPets();
    //return all pets where id DOES NOT MATCH the id we pass
    this.pets = pets.filter(pets => pets.id != id)

    //to change httpcode only when we delete something
    
    return (pets.length != this.pets.length) 
}






}
