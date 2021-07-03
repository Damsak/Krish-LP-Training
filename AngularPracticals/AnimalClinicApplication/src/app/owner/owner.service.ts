import { Injectable } from '@angular/core';
import owners from './data/pets.json';
import {Owner} from './ownermodel/Owners.model';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class OwnerService {

    owners: Owner[] = owners;
    status: any;
    ownerId:any;
    updatedOwner:any;
    errorMessage:any;
   

    rootOwners: any;

     readonly ROOT_URL = 'http://localhost:3000/owners'

    

constructor(private http:HttpClient,private router: Router) {}

onConfig() {
    return this.http.get(this.ROOT_URL);
}

onGet() {
    return this.http.get(this.ROOT_URL);
    //return this.owners;
}

onAdd(owner:Owner) {
    console.log("Onadd values " + JSON.stringify(owner));

    this.http.post<any>(this.ROOT_URL, { 
        firstName: owner.firstName,
        lastName: owner.lastName,
        designation:owner.designation,
        nearestCity:owner.nearestCity,
        tier:owner.tier
        }).subscribe({
        next: data => {
            this.ownerId = data.id;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })

    this.router.navigate(['/ownerlist']);
}

onDelete(id:string) {

    this.http.delete(this.ROOT_URL + `/${id}`)
    .subscribe(() => this.status = 'Delete successful');

}

// onGetOwner(id:string) {

//     console.log("Recied id is  " + id)

//     this.http.get(this.ROOT_URL + `/${id}`)
//     .subscribe({
//         next: data => {
//             this.updatedOwner = data;
//         },
//     })


// return this.updatedOwner;

// // console.log("Updated - Owner "  + JSON.stringify(this.updatedOwner));
//    // console.log("value onGetOwner" + JSON.stringify(this.http.get(this.ROOT_URL + `/${id}` )) );
//   //  return this.http.get(this.ROOT_URL + `/${id}` );   
//     //return this.owners.find(x => x.id === id);
// }



onGetNewOwner(id: string): Observable<Owner>{
    return this.http.get<Owner>(this.ROOT_URL + `/${id}`);
}

onUpdateOwner(owner:any): Observable<Owner> {

//because we only update the city. 
    let updatedCity = {
        "city":owner.nearestCity
    }
    return this.http.put<Owner>(`${this.ROOT_URL}/${owner.id}/city`, updatedCity);
}    
}


