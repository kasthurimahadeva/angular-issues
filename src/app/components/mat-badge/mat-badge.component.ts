import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-badge',
  templateUrl: './mat-badge.component.html',
  styleUrls: ['./mat-badge.component.css']
})
export class MatBadgeComponent implements OnInit {

  badgeCount :number = 0;

  increment(){
      this.badgeCount++;
  }
  constructor() { }

  ngOnInit() {
  }

}
