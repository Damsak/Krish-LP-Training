import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './pet.model';
import {v1 as uuid} from 'uuid';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';
import { PetCreateDto } from './PetCreate.dto';

@Injectable()
export class PetsService {

private pets: Pet[] = []

getAllPets() {
    return this.pets;
}

// createPet(name: string, type: string, condition: string, age: number){
    

//     //here we use destruction. parameters come in same order. therefor they get assigned accordingly
//     const Pet = {
//         id:uuid(), // uuid helps to get a new id everytime when a pet gets created
//         name,
//         type,
//         condition,
//         age,
//     }

//     this.pets.push(Pet)
//     return Pet;

// }

createPet(petCreateDto : PetCreateDto) {

    const {
        name,
        type,
        condition,
        age,
        location } = petCreateDto

        const pet = {
        id:uuid(), // uuid helps to get a new id everytime when a new owner gets created
        name,
        type,
        condition,
        age,
        location
    }

    this.pets.push(pet)
    return pet;
}

petSearch(petSearchDto:PetSearchDto) {

    console.log(petSearchDto);

    //use destruct to separate type and name
    const{location,name} = petSearchDto;


    let pets = this.getAllPets();


    //if user set the type
    if(location) {


    //filter pets with the given type
    pets = pets.filter(pet => pet.location === location)
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


    let pet = pets.find(pet => pet.id === id)

    if(!pet){
        throw new NotFoundException(`${id} does not exist`)
    }

    return pet;
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
