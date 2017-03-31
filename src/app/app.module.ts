import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { TickerComponent } from './ticker.component';

const appRoutes: Routes = [
  { path: 'ticker', component: TickerComponent },
  { path: 'ticker/:symbols', component: TickerComponent },
  { path: '',
    redirectTo: '/ticker',
    pathMatch: 'full',
    //data: { title: 'Heroes List' }
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    TickerComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
