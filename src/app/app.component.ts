import { Component, OnInit } from '@angular/core';

import { TaskServiceService } from './services/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {



  constructor(private miServicio: TaskServiceService) { }



  ngOnInit() {}
  
}
