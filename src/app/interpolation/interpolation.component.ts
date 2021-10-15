import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  company: string;
  strength: number;

  constructor() { 
    this.company = "Wissen !!";
    this.strength = 500;
  }

  ngOnInit(): void {
  }

  getLocation(): string {
    return "Bangalore, Pune, Mumbai";
  }

}
