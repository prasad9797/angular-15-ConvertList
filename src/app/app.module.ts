import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NestedListComponent } from './nested-list/nested-list.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, NestedListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
