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
  private sub: any;
  finalPet: any;


  constructor(private router: Router,private route: ActivatedRoute,private petService: PetService) {
   }


  ngOnInit(): void {
    console.log(pets)
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    console.log("Needed object" + pets[this.id])     

      this.finalPet = this.petService.onGetPet(this.id);

    });
  }

  updatePet(values:Pet){

    this.petService.onUpdate(values);
    this.router.navigateByUrl('/petlist');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoPetList() {
    this.router.navigate(['/petlist'])
  }

}
