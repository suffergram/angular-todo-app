import { Injectable } from '@angular/core';
import { Task } from '../types/task';
import { Status } from '../types/status';

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

  public addTask(title: string, status: Status) {
    this.tasks = [...this.tasks, { id: this.tasks.length, title, status }];
  }

  public removeTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  public changeStatus(id: number, status: Status) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) item.status = status;
      return item;
    });
  }
}
