import {Component, OnInit} from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: true },
    { name: 'Task 3', completed: false }
  ];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

}
