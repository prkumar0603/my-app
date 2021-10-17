import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './parent/child/child.component';
import { SiblingComponent } from './parent/sibling.component';
import { RegisterComponent } from './register/register.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwoWayProcessingComponent } from './two-way-processing/two-way-processing.component';
import { InbuiltPipeComponent } from './inbuilt-pipe/inbuilt-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MySquarePipe } from './pipes/my-square.pipe';
import { MyCubePipe } from './pipes/my-cube.pipe';
import { MyPowerPipe } from './pipes/my-power.pipe';
import { RamComponent } from './ram/ram.component';
import { ShyamComponent } from './shyam/shyam.component';
import { RadhaComponent } from './radha/radha.component';
import { LogService } from './services/log.service';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    // import and register here any new file created for being part of application
    AppComponent,
    ParentComponent,
    LoginComponent,
    ChildComponent,
    SiblingComponent,
    RegisterComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TwoWayProcessingComponent,
    InbuiltPipeComponent,
    CustomPipeComponent,
    MySquarePipe,
    MyCubePipe,
    MyPowerPipe,
    RamComponent,
    ShyamComponent,
    RadhaComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // creating instance of service here and injecting to components. comma seperated
  providers: [LogService,  ],
  
  // root component declare here
  // bootstrap: [AppComponent]
  bootstrap: [ParentComponent, LoginComponent]
})
export class AppModule { }
