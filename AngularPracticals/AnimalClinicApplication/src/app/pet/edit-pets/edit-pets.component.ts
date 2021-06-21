import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pets from '../data/pets.json';


@Component({
  selector: 'ac-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.scss']
})
export class EditPetsComponent implements OnInit {
  id: any;
  firstName:any;
  lastName:any;
  designation:any;
  insuranceBalance:any;
  rbt:any;
  private sub: any;

 

  constructor(private route: ActivatedRoute) {
   }


  ngOnInit(): void {
    console.log(pets)
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("Needed object" + pets[this.id])     
      // In a real app: dispatch action to load the details here.
   
     // id:Number = pets[this.id - 1];
     this.firstName = pets[this.id - 1].firstName
     this.lastName = pets[this.id - 1].lastName
     this.designation = pets[this.id - 1].designation
     this.insuranceBalance = pets[this.id - 1].insuranceBalance
     this.rbt = pets[this.id - 1].rbtProgress
    });
  }

 // name:string = pets[this.id];

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
