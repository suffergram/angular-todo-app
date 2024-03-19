import { Injectable } from '@angular/core';
import { tasks } from './tasks';
import { Task } from '../types/task';
import { Status } from '../types/status';

@Injectable({
  providedIn: 'root',
})
export class ManageListService {
  constructor() {}

  tasks: Task[] = tasks;

  getTasks() {
    return this.tasks;
  }

  addTask(title: string, status: Status) {
    this.tasks = [...this.tasks, { id: this.tasks.length, title, status }];
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  changeStatus(id: number, status: Status) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) item.status = status;
      return item;
    });
  }
}
