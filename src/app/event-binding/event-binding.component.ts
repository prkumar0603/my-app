import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abc(msg: String) : void {
    // console.log("Greetings of the day!!")
    alert("Greetings of the day " + msg + " !!")
  }

  xyz(msg: String): void {
    alert("Changed to : "+ msg)
  }

}
