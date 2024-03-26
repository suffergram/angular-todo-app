import { Component } from '@angular/core';
import { ManageListService } from '../../services/manage-list.service';
import { Status } from '../../../types/status';
import { Filter } from '../../../types/filter';
import { SearchModule } from '../search/search.module';
import { TaskModule } from '../task/task.module';
import { ListToolModule } from '../list-tool/list-tool.module';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SearchModule, TaskModule, ListToolModule, NgIf, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(public manageListService: ManageListService) {}

  public tasks = this.manageListService.getTasks();

  public searchValue = '';

  public filterTasks(params: Filter) {
    this.manageListService.changeFilter(params);
    this.tasks = this.manageListService.filterTasks();
  }

  public removeTask(id: number) {
    this.tasks = this.manageListService.removeTask(id);
  }

  public addTask(params: { title: string; status: Status }) {
    this.tasks = this.manageListService.addTask(params);
  }

  public changeStatus(data: { id: number; status: Status }) {
    this.tasks = this.manageListService.changeStatus(data.id, data.status);
  }
}
