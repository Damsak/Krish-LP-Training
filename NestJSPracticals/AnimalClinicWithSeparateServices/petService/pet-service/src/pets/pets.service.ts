import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './schemas/Pet.schema';
import {v1 as uuid} from 'uuid';
import { PetSearchDto } from './dtos/PetSearch.dto';
import { PetUpdateDto } from './dtos/PetUpdate.dto';
import { PetCreateDto } from './dtos/PetCreate.dto';
import { PetRepository } from './Pet.repository';

@Injectable()
export class PetsService {

constructor(private petRepository: PetRepository){}

async getAllPets():Promise<Pet[]> {
    return await this.petRepository.findAll();
}

petSearch(petSearchDto: PetSearchDto) {
    return this.petRepository.findWithFilters(petSearchDto);
}

async createPet(petCreateDto : PetCreateDto) : Promise <Pet> {

    return await this.petRepository.create(petCreateDto);
}

getPetById(id:string):Promise<Pet> {

    let pet = this.petRepository.findOne(id)
    if (!pet) {
        throw new NotFoundException(`${id} does not exists`)
    }
    return pet;
}

updatePet(petUpdatedto:PetUpdateDto): Promise<Pet> {

    return this.petRepository.update(petUpdatedto)
}

async deletePet(id:string) : Promise <boolean>{
    
    let result = await this.petRepository.delete(id)
    return result;
}

}
