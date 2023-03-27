import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Todo[] = [];

  getTasks(): Todo[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push({ task: task, completed: false });
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
