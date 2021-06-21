import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { CreatePetsComponent } from './create-pets/create-pets.component';
import { EditPetsComponent } from './edit-pets/edit-pets.component';
import { PetRoutingModule } from './pet-routing.module';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
 
    ListPetsComponent,
    CreatePetsComponent,
    EditPetsComponent,
    ProgressBarComponent
  ],
  exports:[

    PetRoutingModule,
    ListPetsComponent,
    CreatePetsComponent,
    EditPetsComponent,
  
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ]
})
export class PetModule { }
