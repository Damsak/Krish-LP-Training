import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import {CreateOwnersComponent} from './create-owners/create-owners.component';
import {EditOwnersComponent} from './edit-owners/edit-owners.component';
import {ListOwnersComponent} from './list-owners/list-owners.component';


const routes: Routes = [
    { path:'ownerlist' , component:ListOwnersComponent},
    { path:'ownercreate', component:CreateOwnersComponent},
    { path:'owneredit/:id' , component:EditOwnersComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class OwnerRoutingModule {}