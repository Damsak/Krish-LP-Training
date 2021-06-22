import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import pets from '../data/pets.json';
import { OwnerService } from '../owner.service';
import { Owner } from '../ownermodel/Owners.model';

@Component({
  selector: 'ac-edit-owners',
  templateUrl: './edit-owners.component.html',
  styleUrls: ['./edit-owners.component.scss']
})
export class EditOwnersComponent implements OnInit {

  id: any;
  private sub: any;
  finalOwner: any;


  constructor(private router: Router,private route: ActivatedRoute, private ownerService: OwnerService) {
   }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("Needed object" + pets[this.id])     
   
      this.finalOwner = this.ownerService.onGetOwner(this.id);

    });


  }

  updateOwner(values:Owner){

    this.ownerService.onUpdate(values);
    this.router.navigateByUrl('/ownerlist');
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoOwnerList() {
    this.router.navigate(['/ownerlist'])
  }

}
