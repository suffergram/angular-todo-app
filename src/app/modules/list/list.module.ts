import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListToolModule } from '../list-tool/list-tool.module';
import { TaskModule } from '../task/task.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListToolModule, TaskModule, SearchModule],
  exports: [ListComponent],
})
export class ListModule {}
