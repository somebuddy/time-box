import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page/app-page.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [AppPageComponent],
  exports: [
    MaterialModule,
    AppPageComponent,
  ],
})
export class UiModule { }
