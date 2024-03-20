import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { Status } from '../types/status';
import { Filter } from '../types/filter';

type NewStatus = {
  [key: string]: Status;
};

@Injectable({
  providedIn: 'root',
})
export class ManageListService {
  constructor() {}

  public tasks: Task[] = [
    {
      id: 0,
      title:
        'Купить еды Купить еды Купить еды Купить еды Купить еды Купить еды Купить еды Купить еды Купить еды Купить еды Купить еды',
      status: Status.Common,
    },
    {
      id: 1,
      title: 'Сделать домашку',
      status: Status.Important,
    },
    {
      id: 2,
      title: 'Погладить кота',
      status: Status.Completed,
    },
  ];

  public filter: Filter = {
    search: '',
    status: Status.All,
  };

  public newStatus: NewStatus = {
    [Status.Common]: Status.Important,
    [Status.Important]: Status.Completed,
    [Status.Completed]: Status.Common,
  };

  public getTasks() {
    return this.filterTasks();
  }

  public addTask({ title, status }: { title: string; status: Status }) {
    this.tasks = [...this.tasks, { id: this.tasks.length, title, status }];
    return this.filterTasks();
  }

  public removeTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    return this.filterTasks();
  }

  public changeStatus(id: number, status: Status) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) item.status = this.newStatus[status];
      return item;
    });
    return this.filterTasks();
  }

  public filterTasks() {
    return this.tasks.filter(
      (item) =>
        item.title.toLowerCase().includes(this.filter.search) &&
        (item.status === this.filter.status ||
          this.filter.status === Status.All)
    );
  }

  public changeFilter(params: Filter) {
    this.filter = params;
  }
}
