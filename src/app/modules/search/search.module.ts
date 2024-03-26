import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, NgFor],
  exports: [SearchComponent],
})
export class SearchModule {}
