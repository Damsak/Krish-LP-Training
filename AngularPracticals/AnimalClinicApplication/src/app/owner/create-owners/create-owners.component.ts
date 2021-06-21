import { Component, OnInit } from '@angular/core';
// import owners from '../data/pets.json';

@Component({
  selector: 'ac-create-owners',
  templateUrl: './create-owners.component.html',
  styleUrls: ['./create-owners.component.scss']
})
export class CreateOwnersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getOwnerValues(values:any){
    console.log(values);
    // owners.push(values);
  }

}
