import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.css']
})
export class InbuiltPipeComponent implements OnInit {

  d1 = new Date();
  str = "Hello Everybody !! ";
  amt = 234565422;
  emp = {
    "name" : "RAjesh",
    "Age" : 25,
    "Salary" : 100000,
    "Designation" : "Devceloper" 
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
