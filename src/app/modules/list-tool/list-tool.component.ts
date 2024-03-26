import { Component, EventEmitter, Output } from '@angular/core';
import { Status } from '../../../types/status';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-tool',
  templateUrl: './list-tool.component.html',
  styleUrl: './list-tool.component.scss',
})
export class ListToolComponent {
  @Output()
  public addTask = new EventEmitter();

  public status: Status = Status.Common;

  public selectOptions = [{ value: Status.Common, name: Status.Common }];

  public onFormSubmit(form: NgForm) {
    const value = {
      status: form.form.value.status,
      title: form.form.value.title?.trim(),
    };

    if (value.title) {
      this.addTask.emit(value);
      form.resetForm({
        status: value.status,
      });
    }
  }

  public Status = Status;
}
