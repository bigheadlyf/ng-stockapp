import { Component, OnInit } from '@angular/core';
import { Ticker } from './ticker';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './ticker.component.html',
    providers: []
})
export class TickerComponent implements OnInit {
    //records: Record[] = [];
    ticker;
    lastUpdateTime: string;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location) {
    }



    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => { 
            let symbol = params["symbol"];
                this.ticker= new Ticker(symbol, "");
                this.dataService.subscribe(this.ticker);
        });
    }

}
