import { Injectable } from '@angular/core';
import { Task } from '../model-task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  CLAVE_LOCAL_STORAGE = "tareas";

  constructor() { }

 // Codificar y decodificar la lista como JSON al momento de guardarla y obtenerla.

  //Para guardar datos la sintaxis es: localStorage.setItem("Clave", "Valor");
  //La funcion recibe un array de tareas del tipo Task[]. 
  //El array se codifica como una cadena/string con JSON.stringify(tareas)
  //Y se guardan en el localStorage con localStorage.setItem, pasando la clave this.CLAVE_LOCAL_STORAGE
  // En el localStorge solo pueden guardarse cadenas/strings
  guardarTareas(tareas: Task[]) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
  }

  //La cadena/string se obtiene con localStorage.getItem pasansole la clave, para poder decodificarla a un array
  //Si eso llegara a regresar un null se indica que se decodificara un array vacio "[]"
  //Con JSON.parse se convierte la cadena/string a un array de objetos de tipo Task[]
  obtenerTareas(): Task[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
}
