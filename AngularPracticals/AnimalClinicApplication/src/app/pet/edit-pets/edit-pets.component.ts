import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pets from '../data/pets.json';
import {Router} from "@angular/router";
import { PetService } from '../pet.service';
import { Pet } from '../petmodel/Pets.model';



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
  rbtProgress:any;
  private sub: any;


  constructor(private router: Router,private route: ActivatedRoute,private petService: PetService) {
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
     this.rbtProgress = pets[this.id - 1].rbtProgress
    });
  }

  updatePet(values:Pet){

    // console.log("Received Values from owner update " + JSON.stringify(values));

    this.petService.onUpdate(values);
    this.router.navigateByUrl('/petlist');
  }

 // name:string = pets[this.id];

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoPetList() {
    this.router.navigate(['/petlist'])
  }



}
