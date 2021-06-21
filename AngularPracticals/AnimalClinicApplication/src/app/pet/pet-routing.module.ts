import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import {CreatePetsComponent} from './create-pets/create-pets.component';
import {EditPetsComponent} from './edit-pets/edit-pets.component';
import {ListPetsComponent} from './list-pets/list-pets.component';


const routes: Routes = [
    { path:'petlist' , component:ListPetsComponent},
    { path:'petcreate', component:CreatePetsComponent},
    { path:'petedit/:id' , component:EditPetsComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class PetRoutingModule {}