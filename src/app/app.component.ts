import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

import { Task } from './model-task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { TaskServiceService } from './services/task-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  titulo: string = "My To-Do List";

  faTimes = faTimes;

  constructor(private miServicio: TaskServiceService) { }

  tarea: Task;
  i:number;
  
  tareas: Task[] = [
  ];


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
