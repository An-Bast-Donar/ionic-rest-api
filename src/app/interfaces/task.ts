export interface Task {
    userId: string;
    //Variable no obligatoria para enviar
    id?: string;
    title: string;
    completed: boolean;
  }