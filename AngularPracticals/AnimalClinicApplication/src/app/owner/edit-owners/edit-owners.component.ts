import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import pets from '../data/pets.json';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'ac-edit-owners',
  templateUrl: './edit-owners.component.html',
  styleUrls: ['./edit-owners.component.scss']
})
export class EditOwnersComponent implements OnInit {

  id: any;
  firstName:any;
  lastName:any;
  designation:any;
  insuranceBalance:any;
  rbtProgress:any;
  private sub: any;

 

  constructor(private router: Router,private route: ActivatedRoute, private ownerService: OwnerService) {
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


  updateOwner(values:any){

    console.log("Received Values from owner update " + values.firstName + values.designation);

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoOwnerList() {
    this.router.navigate(['/ownerlist'])
  }

}
