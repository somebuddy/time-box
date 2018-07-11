import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page/app-page.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [AppPageComponent],
  exports: [
    MaterialModule,
    AppPageComponent,
  ],
})
export class UiModule { }
