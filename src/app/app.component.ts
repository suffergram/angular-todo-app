import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './modules/task/task.component';
import { NgFor } from '@angular/common';
import { ManageListService } from './manage-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public manageListService: ManageListService) {}
}
