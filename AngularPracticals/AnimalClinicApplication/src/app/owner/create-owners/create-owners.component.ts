import { Component, OnInit } from '@angular/core';
//import owners from '../data/pets.json';
import {Router} from "@angular/router";
import { OwnerService } from '../owner.service';

@Component({
  selector: 'ac-create-owners',
  templateUrl: './create-owners.component.html',
  styleUrls: ['./create-owners.component.scss']
})
export class CreateOwnersComponent implements OnInit {

  constructor(private router: Router,private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

  navigatetoOwnerList() {
    this.router.navigate(['/ownerlist'])
  }

  getOwnerValues(values:any){
    console.log(values);


    this.ownerService.onAdd(values);
    
    // owners.push(values);
    this.router.navigate(['/ownerlist'])
    
  }

}
