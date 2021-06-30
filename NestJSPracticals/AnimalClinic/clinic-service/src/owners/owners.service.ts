import { HttpCode, Injectable } from '@nestjs/common';
import { Owner, OwnerStatus, OwnerTier } from './owner.model';
import {v1 as uuid} from 'uuid';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

@Injectable()
export class OwnersService {

private owners: Owner[] = []

getAllOwners() {
    return this.owners;
}

createOwner(firstName: string, lastName: string, designation: string, nearestCity: string, tier: OwnerTier){
    //to create owner we need to get data. 

    //here we use destruction. parameters come in same order. therefor they get assigned accordingly
    const Owner = {
        id:uuid(), // uuid helps to get a new id everytime when a new owner gets created
        firstName,
        lastName,
        designation,
        nearestCity,
        tier,
        status:OwnerStatus.ACTIVE //STATUS IS ACTIVE WHEN WE CREATE AN OWNER
    }

    this.owners.push(Owner)
    return Owner;

}

ownerSearch(ownerSearchDto:OwnerSearchDto) {

    console.log(ownerSearchDto);

    //use destruct to separate status and name
    const{status,name} = ownerSearchDto;

    //now check for any employee with this status
    let owners = this.getAllOwners();


    //if user set the status
    if(status) {

    //console.log(owners)

    //filter owners with the given status
    owners = owners.filter(owner => owner.status === status)
    }

    //if user set the name
    if(name) {
    //filter owners with the given status
    owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name))
    console.log(owners)
    }

    return owners;

}

getOwnerById(id:string):Owner {
    const owners = this.getAllOwners();
    return owners.find(owner => owner.id === id)
}

updateOwner(ownerUpdatedto:OwnerUpdateDto): Owner{

    //SHOULD NOT GET OWNERS DIRECTLY. MUST ALWAYS USE ENCAPSULATION
    const {id,city} = ownerUpdatedto;

    let owner = this.getOwnerById(id);
    owner.nearestCity = city   

    return owner;

}

deleteOwner(id:string) :boolean{
    let owners = this.getAllOwners();
    //return all owners where id DOES NOT MATCH the id we pass
    this.owners = owners.filter(owners => owners.id != id)

    //to change httpcode only when we delete something
    
    return (owners.length != this.owners.length) 
}






}
