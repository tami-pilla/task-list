import { Component, OnInit, Input } from '@angular/core';

import { Task } from 'src/app/model-task';
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

  tareas: Task[] = [
  ];


  tareaTerminada() {
    // El ngModel del checkbox va a indicar si la tarea esta terminada o no. El evento (change) indica si se marca o desmarca la tarea. 
    // Al marcar una tarea el array se modifica. El input con el ngModel ha
    // cambiado la variable, así que solo guardamos las tareas tal y como están. No se hace nada con la tarea, solo se las guarda
    //  this.tareas ya está modificada hasta este punto.
    this.miServicio.guardarTareas(this.tareas);
    this.miServicio.obtenerTareas();
  }

  //  eliminarTarea(tareaLista: Task) {
  //  console.log(tareaLista)
  //  }

  // eliminarTarea(tareaLista: Task) {
  //   // Primero le preguntamos al usuario  
  //   const confirma = confirm("¿Realmente quiere eliminar la tarea?");
  //   if (!confirma) {
  //     return;
  //   }

  //   this.tareaLista.splice(tareaLista, 1);
  //   console.log(this.tareas)

  //   this.miServicio.guardarTareas(this.tareas);
    
  // }



  //  eliminarTarea(indice: number) {
  //    let text = "¿Realmente quiere eliminar la tarea?";
  //    if (confirm(text) == true) {
  //     this.tareas.splice(indice, 1)
  //   }
  //    console.log(this.tareas)
  //    this.miServicio.guardarTareas(this.tareas);
  //  }



  ngOnInit(): void { }


}

