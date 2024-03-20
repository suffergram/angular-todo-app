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

  public onFormSubmit(form: NgForm) {
    const value = form.form.value;

    this.addTask.emit(value);

    form.resetForm({
      status: Status.Common,
    });
  }

  public Status = Status;
}
