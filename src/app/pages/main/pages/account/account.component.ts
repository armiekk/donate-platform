import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'page-account',
    templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('.carousel.carousel-slider').carousel({ 
            fullWidth: true,
            indicators: true,
            noWrap: true,
        });
    }

}