import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { EditOwnersComponent } from './edit-owners/edit-owners.component';
import { CreateOwnersComponent } from './create-owners/create-owners.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListOwnersComponent,
    EditOwnersComponent,
    CreateOwnersComponent
  ],
  exports:[  
    OwnerRoutingModule,
    ListOwnersComponent,
    EditOwnersComponent,
    CreateOwnersComponent
  ], 
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule

  ]
})
export class OwnerModule { }
