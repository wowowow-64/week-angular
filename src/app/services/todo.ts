import { Injectable, signal, computed, effect } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);

  constructor() {
    // Load todos from local storage on initialization
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos.set(JSON.parse(storedTodos));
    }

    // Save todos to local storage whenever they change
    effect(() => {
      localStorage.setItem('todos', JSON.stringify(this.todos()));
    });
  }

  getTodos() {
    return this.todos.asReadonly();
  }

  addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.todos.update(todos => [...todos, newTodo]);
  }

  completeTodo(id: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
}
