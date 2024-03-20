import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { Status } from '../types/status';
import { Filter } from '../types/filter';

@Injectable({
  providedIn: 'root',
})
export class ManageListService {
  constructor() {}

  public tasks: Task[] = [
    {
      id: 0,
      title:
        'Купить продукты Купить продукты Купить продукты Купить продукты Купить продукты Купить продукты Купить продукты Купить продукты Купить продукты',
      status: Status.Common,
    },
    {
      id: 1,
      title: 'Сделать домашку',
      status: Status.Important,
    },
    {
      id: 2,
      title: 'Покормить кота',
      status: Status.Completed,
    },
  ];

  public filter: Filter = {
    search: '',
    status: Status.All,
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
      if (item.id === id) item.status = status;
      return item;
    });
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
