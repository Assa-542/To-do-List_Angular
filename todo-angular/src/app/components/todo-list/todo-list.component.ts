import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [FormsModule, NgFor, TodoItemComponent]
})
export class TodoListComponent {
  task: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
