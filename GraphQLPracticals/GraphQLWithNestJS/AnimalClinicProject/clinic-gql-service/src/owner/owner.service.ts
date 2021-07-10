import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerCreateDTO } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {

    constructor(@InjectRepository(Owner) private ownerRepository:Repository<Owner>){

    }

    async findAll():Promise<Owner[]> {
        
       return this.ownerRepository.find({
           relations:["pets"]
       });
    }

    async create(owner: OwnerCreateDTO): Promise<Owner> {

        let newOwner = this.ownerRepository.create(owner);
        return this.ownerRepository.save(newOwner)

    }

    async findOne(id: string): Promise<Owner>  {
        return this.ownerRepository.findOne(id, {relations:["pets"]});
      }

    update(id: string, updateOwnerInput: UpdateOwnerInput) {
        let owner:Owner = this.ownerRepository.create(updateOwnerInput)
        owner.id = id;
        return this.ownerRepository.save(owner)
    }

    remove(id:string) {
        
    }



}
