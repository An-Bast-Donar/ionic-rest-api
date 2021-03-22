import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  //Normalmente se pone en las variables de environments por si otro servicio se conectara a la misma url
  private api = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getAllTasks() {
    const path = this.api + 'todos';
    /*  http por defecto regresa un Observable al cual hay que suscribirce para pedir la informacion
     *  En Angular no hay que preocuparse por desuscribirse por que lo hace automaticamente, entros frameworks si hay que hacerlo
     *  Lo que me devolvera esos detos es un Array de objetos Task
     *  El path es la direccion a la que se conecta y el endpoint
     */
    return this.http.get<Task[]>(path);
  }

  //Se conecta a una tarea
  getTask(id: string) {
    const path = this.api + 'todos/' + id;
    return this.http.get<Task>(path);
  }

  //Creamos una tarea
  createTask(task: Task) {
    const path = this.api + 'todos';
    /*  No se tipa ningun return solo que lo cree
     *  Algunas bases de datos si regresan el objeto, como muestra de que se creo exitosamente o algo
     */
    return this.http.post<Task>(path, task);
  }

  //Actualizacion de una tarea
  updateTask(task: Task) {
    //Le estoy diciendo que se conecte a la tarea que vamos a actualizar
    const path = this.api + 'todos/' + task.id;
    return this.http.put<Task>(path, task);
    /*  Otro tipo de actualizacion es el patch y depende de si la REST API permite esto o no
     *  La diferencia con put, es que con put hay que enviar todo el objeto, miestras que patch solo necesita el atributo a cambiar
     */
    // return this.http.patch<Task>(path, task);
  }

  deleteTask(id: string) {
    const path = this.api + 'todos/' + id;
    return this.http.delete(path);
  }

}
