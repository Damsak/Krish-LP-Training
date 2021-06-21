import { Injectable } from '@angular/core';
import owners from './data/pets.json';
import {Owner} from './ownermodel/Owners.model';


@Injectable({
    providedIn:'root'
})

export class OwnerService {

    owners: Owner[] = owners;

constructor() {}

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
    
}

