import { Injectable } from '@angular/core';
import pets from './data/pets.json';
import {Pet} from './petmodel/Pets.model';


@Injectable({
    providedIn:'root'
})

export class PetService {

    pets: Pet[] = pets;

constructor() {}

onGet() {
    return this.pets;
}

onAdd(pet:Pet) {
    this.pets.push(pet)
}

onDelete(id:string) {

    let targetPet :any;

    targetPet = this.pets.find(x => x.id === id);
    let index = this.pets.indexOf(targetPet,0);
    this.pets.splice(index,1);
}

onGetPet(id:string) {
    return this.pets.find(x => x.id === id);

}


onUpdate(pet: Pet){

    
    let targetPet :any;

    targetPet = this.pets.find(x => x.id === pet.id);
    let index = this.pets.indexOf(targetPet,0);


    targetPet.firstName = pet.firstName;
    targetPet.lastName = pet.lastName;
    targetPet.designation = pet.designation;
    targetPet.insuranceBalance = pet.insuranceBalance;
    targetPet.rbtProgress = pet.rbtProgress;

    pets[index] = targetPet;

}
    
}


