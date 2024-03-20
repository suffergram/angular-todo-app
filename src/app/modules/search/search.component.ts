import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from '../../../types/status';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input()
  public searchValue?: string;

  @Output()
  public filterTasks = new EventEmitter();

  public Status = Status;

  public status = Status.All;

  public onChange(
    search: string = this.searchValue ?? '',
    status: Status = this.status
  ) {
    const params = {
      search,
      status,
    };

    this.filterTasks.emit(params);
  }
}
