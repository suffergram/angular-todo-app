import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../types/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor() {}

  @Input()
  task!: Task;

  @Output()
  public removeTask = new EventEmitter();
}
