import { Component, OnInit } from '@angular/core';
import owners from '../data/pets.json';
import { Owner } from '../ownermodel/Owners.model';
import { OwnerService } from '../owner.service';
import {Router} from "@angular/router";


@Component({
  selector: 'ac-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss']
})
export class ListOwnersComponent implements OnInit {

  title: string = "Pet Management System"
  owners:Owner[]=owners;
  filteredOwners:Owner[]=owners;
  showIcon: boolean=false;
  message:string = '';
  previousVal!:number;
  private _ownerFilter:string=''


  set ownerFilter(value: string) {

   this._ownerFilter = value;
    //everytime the setter fired we need to call
    this.filterByOwner();
    

    console.log("filter value" + this._ownerFilter);
  }

  get ownerFilter(): string {
    return this._ownerFilter;
  }

  constructor(private router: Router,private ownerService: OwnerService) {
    
   }

  editOwner(value: string){
    console.log("Edit called " + value)
    this.router.navigate(['/owneredit', value])
  }

  // deleteOwner(value: Event){

  //   console.log("Delete called" + value);
  //   this.previousVal = Number(value) -1;
  //   this.owners.splice(this.previousVal,1);
  // }

  onDelete(id:string){
    this.ownerService.onDelete(id);
  }

  ngOnInit(): void {

 //   this.ownerService.onConfig().subscribe(val => console.log(val));
  }

  toggleIcon(){
    this.showIcon = !this.showIcon;
  }

  filterByOwner(){

    //filter and should display original values when user erase the content
    this.filteredOwners = this.owners.filter(owner => owner.designation.includes(this._ownerFilter));

  }

  onMessageReceived(value: string) {
    this.message = value;
  }

}