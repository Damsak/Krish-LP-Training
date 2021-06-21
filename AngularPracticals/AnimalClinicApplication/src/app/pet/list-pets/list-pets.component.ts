import { Component, OnInit } from '@angular/core';
import pets from '../data/pets.json';
import { Pet } from '../petmodel/Pets.model';
import {Router} from "@angular/router";
import { PetService } from '../pet.service';


@Component({
  selector: 'ac-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  title: string = "Pet Management System"
  pets:Pet[]=pets;
  filteredPets:Pet[]=pets;
  showIcon: boolean=false;
  //to accept the the emiting input from child(progress-bar) when clicked
  message:string = '';
  private _animalFilter: string= '';


  set animalFilter(value: string) {
    console.log("setter fired" + value)

    this._animalFilter = value;
    //everytime the setter fired we need to call
    this.filterByAnimal();
  
  }

  get animalFilter(): string {
    return this._animalFilter;
  }

  constructor(private router: Router,private petService: PetService) { }

  editPet(value: string){
    console.log("Edit called " + value)

    this.router.navigate(['/petedit', value])
  }

  // deletePet(name: string){
  //   console.log("delete called" + name);
  // }

  onDelete(id:string){
    this.petService.onDelete(id);
  }

  ngOnInit(): void {
  }

  toggleIcon(){
    this.showIcon = !this.showIcon;
  }

  filterByAnimal(){

    console.log(this.pets);
    //filter and should display original values when user erase the content
    this.filteredPets = this.pets.filter(pet => pet.designation.includes(this._animalFilter));

  }

  //to get the message emitted from  progress bar. 
  onMessageReceived(value: string) {
    this.message = value;
  }

}