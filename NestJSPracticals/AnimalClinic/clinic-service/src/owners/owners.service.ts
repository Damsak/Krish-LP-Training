import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import {  OwnerStatus, OwnerTier } from './owner.enum';
import {v1 as uuid} from 'uuid';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';
import { OwnerCreateDto } from './OwnerCreate.dto';
import { Owner } from './schemas/Owner.schema';
import { OwnerRepository } from './Owner.repository';

@Injectable()
export class OwnersService {

constructor(private ownerRepository: OwnerRepository){

}

async getAllOwners():Promise<Owner[]> {
    return await this.ownerRepository.findAll();
}

async createOwner(ownerCreateDto : OwnerCreateDto) : Promise <Owner> {

    return await this.ownerRepository.create(ownerCreateDto);
}

ownerSearch(ownerSearchDto: OwnerSearchDto) {
    return this.ownerRepository.findWithFilters(ownerSearchDto);
}

getOwnerById(id:string):Promise<Owner> {

    let owner = this.ownerRepository.findOne(id)
    if (!owner) {
        throw new NotFoundException(`${id} does not exists`)
    }
    return owner;

}

updateOwner(ownerUpdatedto:OwnerUpdateDto): Promise<Owner> {

    return this.ownerRepository.update(ownerUpdatedto)

}

async deleteOwner(id:string) : Promise <boolean>{
    
    let result = await this.ownerRepository.delete(id)

    return result;
}

}
