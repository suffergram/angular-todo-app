import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { ManageListService } from '../../manage-list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(public manageListService: ManageListService) {}
}
