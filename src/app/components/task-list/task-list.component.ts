import { Component, OnInit, Input, Output } from '@angular/core';

import { Task } from 'src/app/model-task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


 @Input() tareaLista: Task;
 @Input() indice: number;
 

  faTimes = faTimes;

  constructor(private miServicio: TaskServiceService) { }

  tareas: Task[] = [];


  
  //Esta funcion va a obtener las tareas a traves del servicio y las va a guardar en el array this.tareas
  obtenerTareas() {
    this.tareas = this.miServicio.obtenerTareas();
  }


  tareaTerminada() {
    // El ngModel del checkbox va a indicar si la tarea esta terminada o no. El evento (change) indica si se marca o desmarca la tarea. 
    // Al marcar una tarea el array se modifica. El input con el ngModel ha
    // cambiado la variable, así que solo guardamos las tareas tal y como están. No se hace nada con la tarea, solo se las guarda
    //  this.tareas ya está modificada hasta este punto.
    this.miServicio.guardarTareas(this.tareas);
    this.miServicio.obtenerTareas();
  }


   eliminarTarea(tareaLista: Task, indice: number) {

     console.log(this.tareaLista);
     console.log(this.indice);
     console.log(this.tareas);
 
      let text = "¿Realmente quiere eliminar la tarea?";
      if (confirm(text) == true) {   
      this.tareas.splice(indice, 1)
     }
     console.log(this.tareas);
      this.miServicio.obtenerTareas()
     this.miServicio.guardarTareas(this.tareas);
   }



  ngOnInit(): void { }


}

