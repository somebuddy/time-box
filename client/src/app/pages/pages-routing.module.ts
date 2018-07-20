import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';

const routes: Routes = [
  { path: 'history', component: HistoryPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'stats', component: StatisticsPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
