import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  msg: String = "Demo MSg ";
  constructor() { }

  ngOnInit(): void {
  }

  abc(): void {
    alert ("Message = "+ this.msg)
  }

}
