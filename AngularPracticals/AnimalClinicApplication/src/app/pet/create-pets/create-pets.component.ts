import { Component, OnInit } from '@angular/core';
//import pets from '../data/pets.json';
import {Router} from "@angular/router";
import { PetService } from '../pet.service';


@Component({
  selector: 'ac-create-pets',
  templateUrl: './create-pets.component.html',
  styleUrls: ['./create-pets.component.scss']
})
export class CreatePetsComponent implements OnInit {

  constructor(private router: Router,private petService: PetService) { }

  ngOnInit(): void {
  }

  navigatetoPetList() {
    this.router.navigate(['/petlist'])
  }

  getPetValues(values:any){
    console.log("Received Values " + values.firstName);

    this.petService.onAdd(values);
    // pets.push(values);

    this.router.navigate(['/petlist'])
  } 

}
