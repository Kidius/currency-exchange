import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompareCurrencyComponent } from './components/compare-currency/compare-currency.component';

const routes: Routes = [
  { path: 'compare/:from/:to/:amount', component: CompareCurrencyComponent},
  { path: '', component: HomeComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo:'/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
