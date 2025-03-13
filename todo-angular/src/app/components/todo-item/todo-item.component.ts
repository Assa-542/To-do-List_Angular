import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  standalone: true
})
export class TodoItemComponent {
  @Input() task!: string;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();

  removeTask() {
    this.remove.emit(this.index);
  }
}
