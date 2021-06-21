import { Component, OnInit } from '@angular/core';
// import pets from '../data/pets.json';


@Component({
  selector: 'ac-create-pets',
  templateUrl: './create-pets.component.html',
  styleUrls: ['./create-pets.component.scss']
})
export class CreatePetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getPetValues(values:any){
    console.log("Received Values " + values.firstName);
    // pets.push(values);

  
  } 



}
