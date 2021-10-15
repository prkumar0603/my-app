import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './parent/sibling.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    // register here any new file created for being part of application
    AppComponent,
    ParentComponent,
    LoginComponent,
    ChildComponent,
    SiblingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  
  // starting module 
  // bootstrap: [AppComponent]
  bootstrap: [ParentComponent, LoginComponent]
})
export class AppModule { }
