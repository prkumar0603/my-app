import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})

// injectible decorator is making this service accissible everywhere in project. 
// if  we remove it, then we need to add chatService in app.module.ts file in providers section.

// we require injectible decorator to the service which is using other service. 
// here chat service is using log service, hence it require injectible decorator.
// eg - @Injectable()
export class ChatService {

  messages : String[] = [];

  constructor(private ls : LogService) { 
    console.log("Chat Service Object created !!! ");
  }

  chatMessage(msg : String){
    this.messages.push(msg);
    // console.log(this.messages);

    this.ls.logMessage(msg);
  }
}
// View Encapsulation - any changes in any component will change only in that component.
// we have style.css for global look and feel.
// If we want some logic to be executed by all the components, then we use services and 
// inject it to the components. services are logic or data which is shared by components. 
// we also have buit in services like httpService. which we need to import first then use.