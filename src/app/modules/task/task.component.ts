import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../types/task';
import { Status } from '../../../types/status';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor() {}

  public Status = Status;

  @Input()
  task!: Task;

  @Output()
  public removeTask = new EventEmitter();

  @Output()
  public changeStatus = new EventEmitter();
}
