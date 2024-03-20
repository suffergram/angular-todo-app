import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListToolModule } from '../list-tool/list-tool.module';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListToolModule, TaskModule],
  exports: [ListComponent],
})
export class ListModule {}
