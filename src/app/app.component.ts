import { Component, OnInit } from '@angular/core';
import { ManageListService } from './services/manage-list.service';
import { Task } from '../types/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private manageListService: ManageListService) {}

  ngOnInit(): void {
    this.manageListService.fetchTasks().subscribe((data: Object) => {
      const tasks = data as Task[];
      this.manageListService.setTasks(tasks);
    });
  }
}
