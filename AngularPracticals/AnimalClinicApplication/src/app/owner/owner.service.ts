import { Injectable } from '@angular/core';
import owners from './data/pets.json';
import {Owner} from './ownermodel/Owners.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class OwnerService {

    owners: Owner[] = owners;

    // rootOwners: any;

    // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'

    

constructor(private http:HttpClient) {}

// onConfig() {
//     return this.http.get(this.ROOT_URL + '/posts');
// }

onGet() {
    return this.owners;
}

onAdd(owner:Owner) {
    this.owners.push(owner)
}

onDelete(id:string) {

    let targetOwner :any;

    targetOwner = this.owners.find(x => x.id === id);
    let index = this.owners.indexOf(targetOwner,0);
    this.owners.splice(index,1);
}

onGetOwner(id:string) {
    return this.owners.find(x => x.id === id);
}


onUpdate(owner: Owner){

    
    let targetOwner :any;

    targetOwner = this.owners.find(x => x.id === owner.id);
    let index = this.owners.indexOf(targetOwner,0);


    targetOwner.firstName = owner.firstName;
    targetOwner.lastName = owner.lastName;
    targetOwner.designation = owner.designation;
    targetOwner.insuranceBalance = owner.insuranceBalance;
    targetOwner.rbtProgress = owner.rbtProgress;

    owners[index] = targetOwner;

}
    
}


