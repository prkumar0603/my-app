import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-radha',
  templateUrl: './radha.component.html',
  styleUrls: ['./radha.component.css']
})
export class RadhaComponent implements OnInit {

  constructor( public cs : ChatService ) { }

  ngOnInit(): void {
  }

  sendMessage(msg : String): void {
    this.cs.chatMessage("Radha : "+ msg);
  }

}
