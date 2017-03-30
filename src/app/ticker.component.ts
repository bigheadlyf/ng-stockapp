import { Component, OnInit } from '@angular/core';
import { Ticker } from './ticker';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-root',
    templateUrl: './ticker.component.html'
})
export class TickerComponent implements OnInit {
    updateTimer: number;
    //records: Record[] = [];
    tickers = [];
    lastUpdateTime: string;

    constructor(
        private route: ActivatedRoute,
        private location: Location) {
    }

    updateDate() {
        
    };

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => { 
            let symbols = params["symbols"].split(',');
            for(var i = 0; i<symbols.length;i++){
                this.tickers.push(new Ticker(symbols[i], ""));
            }
        });
        this.updateDate();
        this.updateTimer = window.setInterval(()=>{this.updateDate()}, 10000);
    }

}
