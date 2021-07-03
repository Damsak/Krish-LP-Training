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


  id:any;
  firstName:any;
  lastName:any;
  designation:any;
  nearestCity:any;
  tier:any;


  paramId: any;
  private sub: any;
  finalOwner: any;

  updatedOwner:any;


  constructor(private router: Router,private route: ActivatedRoute, private ownerService: OwnerService) {
   }

  ngOnInit(): void{

      this.sub = this.route.params.subscribe(params => {
      this.paramId = params['id'];

    });

    if (this.paramId) {
      this.ownerService.onGetNewOwner(this.paramId)
        .subscribe(
          res => {
            console.log(res);
            this.finalOwner = res;

            this.id = this.finalOwner._id;
            this.firstName =this.finalOwner.firstName;
            this.lastName = this.finalOwner.lastName;
            this.designation = this.finalOwner.designation;
            this.nearestCity = this.finalOwner.nearestCity;
            this.tier = this.finalOwner.tier

          },
          err => console.log(err)
        )
    }
  }

  updateOwner(values:Owner){

    this.ownerService.onUpdateOwner(values).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/ownerlist')
      },
      err => console.log(err)
    )
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoOwnerList() {
    this.router.navigate(['/ownerlist'])
  }

}
