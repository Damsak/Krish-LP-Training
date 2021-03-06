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
  // owners:Owner[]=owners;
  // filteredOwners:Owner[]=owners;
  owners:any;
  filteredOwners:any;

  showIcon: boolean=false;
  message:string = '';
  previousVal!:number;
  private _ownerFilter:string=''


  set ownerFilter(value: string) {

   this._ownerFilter = value;
    //everytime the setter fired we need to call
    //this.filterByOwner();
    

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

  onDelete(id:string){
    this.ownerService.onDelete(id);
    //reload page after delete
    window.location.reload();
  }

  ngOnInit(): void {

  this.ownerService.onConfig().subscribe((data)=> this.displayOwners(data));

  }

  displayOwners(data:any) {
    this.owners = data;
    console.log(data)
  }

  // toggleIcon(){
  //   this.showIcon = !this.showIcon;
  // }

  // filterByOwner(){

  //   //filter and should display original values when user erase the content
  //   this.filteredOwners = this.owners.filter(owner => owner.designation.includes(this._ownerFilter));

  // }

  // onMessageReceived(value: string) {
  //   this.message = value;
  // }

}