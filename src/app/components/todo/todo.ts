import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  private todoService = inject(TodoService);
  
  protected readonly todos = this.todoService.getTodos();
  protected readonly newTodoText = signal('');

  addTodo() {
    const text = this.newTodoText().trim();
    if (text) {
      this.todoService.addTodo(text);
      this.newTodoText.set('');
    }
  }

  toggleCompletion(id: number) {
    this.todoService.completeTodo(id);
  }
}
