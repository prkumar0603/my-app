import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  bgc: boolean = false;
  brd: boolean = !this.bgc;

  bg: String = "pink";

  switch : boolean = false;

  ch : number = 0;

  players = ["Kohli", "Rohit", "Dhoni" , "Ashwin"];
  
  constructor() { }

  ngOnInit(): void {
  }

  showAndHide(): void {
    this.switch = !this.switch;
  }

  greet() : void{
    if(this.ch >= 5){
      this.ch = 0;
    }
    this.ch++;
  }

}
