import { Component, OnInit } from '@angular/core';
import { Ticker } from './ticker';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DataService } from './data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tickers = [];

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let symbols = params["symbols"].split(',');
      for (var i = 0; i < symbols.length; i++) {
        let tk = new Ticker(symbols[i], "");
        tk.onUpdateHandler((data) => {
          //data
        })
        this.tickers.push(tk);
        this.dataService.subscribe(tk);
      }
    });
  }

}
