import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor]
})
export class TodoComponent {
removeTask(_t11: number) {
throw new Error('Method not implemented.');
}
  task = '';
  tasks: string[] = [];

  addTask() {
    if (this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }
}
