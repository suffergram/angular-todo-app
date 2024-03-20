import { Component } from '@angular/core';
import { ManageListService } from '../../manage-list.service';
import { Status } from '../../../types/status';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(public manageListService: ManageListService) {}

  public removeTask(id: number) {
    this.manageListService.removeTask(id);
  }

  public addTask(params: { title: string; status: Status }) {
    this.manageListService.addTask(params);
  }
}
