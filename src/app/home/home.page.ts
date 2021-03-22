import { Component } from '@angular/core';
import { TasksService } from './../services/tasks.service';
import { Task } from './../interfaces/task';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {}
  
  async ngOnInit(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
    });
    await loading.present();
    //la suscriccion nos devuelve un array de tasks que le asignamos a nuestro array de la clase
    this.tasksService.getAllTasks().subscribe(async (tasks) => {
      console.log(tasks);
      this.tasks = tasks;
      await loading.dismiss();
    })
  }

  //Estudiar este pedazo mas a fondo
  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva tarea!',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'aca la tarea',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Crear',
          //Recibe lo que el usuario digito
          handler: (data) => {
            console.log(data);
            this.createTask(data.title)
          }
        }
      ]
    });
    await alert.present();

  }async Actualizar(task:Task, index:number) {
    const alert = await this.alertCtrl.create({
      header: 'Actualizar',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'nuevo titulo',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'uptade',
          //Recibe lo que el usuario digito
          handler: (data) => {
            console.log(data);
            task.title = data.title;
            this.updateTask(task, index)
          }
        }
      ]
    });
    await alert.present();
  }

  createTask(title: string) {
    const task = {
      userId: '1',
      title,
      completed: false
    };
    this.tasksService.createTask(task)
    .subscribe((newTask) => {
      this.tasks.unshift(newTask);
    });
    //unshift: agrega al inicio
    //push: agrega al final
  }

  deleteTask(id: string, index: number) {
    this.tasksService.deleteTask(id)
    .subscribe(() => {
      //Eliminar una posicion especifica de un arreglo
      this.tasks.splice(index, 1);
      this.presentToast('Tarea eliminada Correctamente');
    });
  }

  updateTask(task:Task, index:number){
    this.tasksService.updateTask(task)
    .subscribe((task)=>{
      this.tasks[index] = task;
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }

}
