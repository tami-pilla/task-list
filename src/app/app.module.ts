import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskServiceService } from './services/task-service.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [
    TaskServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
