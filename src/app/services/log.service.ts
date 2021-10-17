// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// here we are removing the injectible decorator, so we need to add this service to providers in 
// app.module.ts file

export class LogService {

  constructor() { 
    console.log("Log Service Object Created !!! ");
    
  }

  logMessage(msg: String) : void{
    console.log("Logged Message : "+ msg);
  }
}
