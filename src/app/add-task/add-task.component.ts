import { Component } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTask = '';

  constructor(private taskService: TaskService) { }

  onSubmit() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }
}


