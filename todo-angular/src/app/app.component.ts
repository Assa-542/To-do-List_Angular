import { Component } from '@angular/core';
import { TodoComponent } from "./components/todo/todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TodoComponent]
})
export class AppComponent {
  title = 'todo-angular';
}
