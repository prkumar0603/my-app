import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-processing',
  templateUrl: './two-way-processing.component.html',
  styleUrls: ['./two-way-processing.component.css']
})
export class TwoWayProcessingComponent implements OnInit {

  fullname: String = "Guest";

  constructor() { }

  ngOnInit(): void {
  }

  club(fn: String, ln: String): void {
    // alert("Welcome "+ fn +" " + ln);
    this.fullname = fn + " " + ln;
  }

}
