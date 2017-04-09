import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DataService } from './data.service';

import { HomeComponent } from './home.component';
import { TickerComponent } from './ticker.component';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
  { path: 'ticker', component: TickerComponent },
  { path: 'ticker/:symbol', component: TickerComponent },
  { path: 'dashboard/:symbols', component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    //data: { title: 'Heroes List' }
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    TickerComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DataService],  //singleton service
  bootstrap: [HomeComponent]
})
export class AppModule { }
