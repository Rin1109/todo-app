import {Component, OnInit} from '@angular/core';



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

  addTask(newTaskName: string) {
    this.tasks.push({ name: newTaskName, completed: false });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
