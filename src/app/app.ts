import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  template: `
    <main>
      <app-todo />
    </main>
  `,
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
