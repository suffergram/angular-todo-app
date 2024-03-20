import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListModule } from './modules/list/list.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, ListModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
