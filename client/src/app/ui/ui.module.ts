import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page/app-page.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { IconsModule } from './icons/icons.module';
import { NavAsideComponent } from './navigation/nav-aside/nav-aside.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    IconsModule,
  ],
  declarations: [AppPageComponent, NavAsideComponent],
  exports: [
    MaterialModule,
    IconsModule,
    AppPageComponent,
  ],
})
export class UiModule { }
