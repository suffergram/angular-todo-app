import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListToolComponent } from './list-tool.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListToolComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListToolComponent],
})
export class ListToolModule {}
