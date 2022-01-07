import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

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

  titulo: string = "My To-Do List";

  faTimes = faTimes;

  constructor(private miServicio: TaskServiceService) { }

  tarea: Task;
  i: number;

  tareas: Task[] = [];


  //la info de los input se van a almacenar en estas variables
  inputTarea: string = "";
  inputDia: string = "";


  addTask(): void {
    let myTask = new Task(this.inputTarea, this.inputDia);
    this.tareas.push(myTask);

    // Se llama al servicio para que guarde la nueva tarea en el array this.tareas
    // Luego de agregarse una nueva tarea a la lista, el servicio guarda las tareas guardarTareas()
    // Se refresca automaticamente y ahi se obtienen nuevamente todo el array this.tareas
    this.miServicio.guardarTareas(this.tareas);
    this.miServicio.obtenerTareas();

    // se limpian los input para hacer una nueva entrada
    this.inputTarea = "";
    this.inputDia = "";
    console.log(this.tareas)
  }


  tareaTerminada() {
    // El ngModel del checkbox va a indicar si la tarea esta terminada o no. El evento (change) indica si se marca o desmarca la tarea. 
    // Al marcar una tarea el array se modifica. El input con el ngModel ha
    // cambiado la variable, así que solo guardamos las tareas tal y como están. No se hace nada con la tarea, solo se las guarda
    //  this.tareas ya está modificada hasta este punto.
    this.miServicio.guardarTareas(this.tareas);
    this.miServicio.obtenerTareas();
  }


  eliminarTarea(tarea: Task, i: number) {
    console.log(i);
    console.log(tarea);

    let text = "¿Realmente quiere eliminar la tarea?";
    if (confirm(text) == true) {
      this.tareas.splice(i, 1)
    }
    console.log(this.tareas);
    this.miServicio.obtenerTareas()
    this.miServicio.guardarTareas(this.tareas);
  }


  //Esta funcion va a obtener las tareas a traves del servicio y las va a guardar en el array this.tareas
  obtenerTareas() {
    this.tareas = this.miServicio.obtenerTareas();
  }


  //En el Init del componente se va a invocar a la funcion obtenerTareas() (primero se injecta el servicio)
  //Al tener las tareas en el Init se renderiza la lista
  ngOnInit(): void {
    this.obtenerTareas()
  }


}

