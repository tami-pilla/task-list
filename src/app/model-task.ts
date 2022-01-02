//se crea la clase con el modelo para construir/abstraer tareas
export class Task {
  splice(tareaLista: Task, arg1: number) {
    
  }


  nombre: string = "";
  dia: string = "";
  terminada: boolean;


  //dentro de la clase se crea el constructor que es el que va a crear a los objetos
  //this.nombre hace referencia al campo de la clase y nombre es el parametro que se le pasa al constructor. \
  constructor(nombre: string, dia: string, terminada?: boolean) {

    this.nombre = nombre;
    this.dia = dia;
    this.terminada = terminada ? terminada : false;

  }
}