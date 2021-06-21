import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 

@Component({
  selector: 'ac-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  color: string = '';
  @Input() progress:number=0;
  @Input() firstName: string = ''
  //for Child(Progress bar) to Parent(Pet list) communication
  @Output() progressClick: EventEmitter<string> = new EventEmitter<string>();
  
  // progress:number=0;
  //firstName: string = '';

  
  
  constructor() { }

  ngOnInit(): void {

    if (this.progress < 0 || this.progress > 100) {
      this.progress = 0;
    }

    if (this.progress < 35) {
      this.color = 'red' 

    } else if (this.progress < 75) {
      this.color = 'yellow'
    } else {
      this.color = 'green'
    }

  }
  onClick() {
    this.progressClick.emit(` ${this.firstName}'s Progress is ${this.progress} %`);
  }

}
