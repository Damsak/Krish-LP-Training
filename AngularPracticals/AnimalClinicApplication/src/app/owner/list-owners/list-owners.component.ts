import { Component, OnInit } from '@angular/core';
import owners from '../data/pets.json';
import { Owner } from '../ownermodel/Owners.model';
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
  private _ownerFilter:string=' '


  set ownerFilter(value: string) {
   // console.log("setter fired")

    //everytime the setter fired we need to call
    this.filterByOwner();
    this._ownerFilter = value;

    console.log("filter value" + this._ownerFilter);
  }

  get ownerFilter(): string {
    return this._ownerFilter;
  }

  constructor(private router: Router) { }

  editOwner(value: string){
    console.log("Edit called " + value)
    this.router.navigate(['/owneredit', value])
  }

  deleteOwner(name: string){
    console.log("delete called" + name);
  }

  ngOnInit(): void {
  }

  toggleIcon(){
    this.showIcon = !this.showIcon;
  }

  filterByOwner(){

    //console.log("Owner is " + this.owners);
    //filter and should display original values when user erase the content
    this.filteredOwners = this.owners.filter(owner => owner.designation.includes(this._ownerFilter));


  }

  onMessageReceived(value: string) {
    this.message = value;
  }

}