import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';  // importing the module

@Component({
  selector: 'app-shyam',
  templateUrl: './shyam.component.html',
  styleUrls: ['./shyam.component.css']
})
export class ShyamComponent implements OnInit {

  // this create two individual instance of chat service. one for Ram and other for shyam
  // so Ram msg will be only with Ram and Shyam msg with only shyam.
  // cs : ChatService = new ChatService();

  // Hence we did dependency injection from providers in module.ts file.
  constructor( public cs : ChatService) { }

  ngOnInit(): void {
  }

  sendMessage(msg : String): void {
    this.cs.chatMessage("Shyam : "+ msg);
    // alert("Shyam Msg : "+ msg);
  }

}
