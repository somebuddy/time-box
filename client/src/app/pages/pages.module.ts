import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [HistoryPageComponent, DashboardPageComponent, StatisticsPageComponent]
})
export class PagesModule { }
