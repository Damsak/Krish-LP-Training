import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {

  constructor(@InjectRepository(Pet) private petRepository:Repository<Pet>,
  private ownerService:OwnerService){}

  create(pet: CreatePetInput): Promise<Pet>  {
    
    let newPet = this.petRepository.create(pet);
    return this.petRepository.save(newPet);
  }

  async findAll() : Promise<Pet[]>  {
    return this.petRepository.find();
  }

  async findOne(id: string): Promise<Pet>  {
    return this.petRepository.findOne(id);
  }

  async getOwner(id:string) : Promise<Owner> {
    return this.ownerService.findOne(id);
  }

  update(id: string, updatePetInput: UpdatePetInput) {
    let pet:Pet = this.petRepository.create(updatePetInput)
    pet.id = id;
    return this.petRepository.save(pet)
  }

  remove(id: string) {
    return `This action removes a #${id} pet`;
  }
}
