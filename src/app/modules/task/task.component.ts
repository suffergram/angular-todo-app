import { Component, Input } from '@angular/core';
import { Task } from '../../../types/task';
import { ManageListService } from '../../manage-list.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(public manageListService: ManageListService) {}

  @Input()
  task!: Task;
}
