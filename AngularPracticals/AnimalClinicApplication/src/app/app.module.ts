import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { OwnerModule } from './owner/owner.module';
import { PetModule } from './pet/pet.module';
import { RouterModule } from '@angular/router';

import {CreatePetsComponent} from './pet/create-pets/create-pets.component';
import { HomeComponent } from './home/home.component';
import { EditPetsComponent } from './pet/edit-pets/edit-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PetModule,
    OwnerModule,
    RouterModule.forRoot([

    {path:'home', component: HomeComponent},
   // {path:'editpets2', component:EditPetsComponent},
    {path:'', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
