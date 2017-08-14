import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
declare var $: any;

@Component({
    selector: 'comp-charity-carousel',
    templateUrl: './charity-carousel.component.html'
})
export class CharityCarousel implements OnInit {

    @Input() data: Post[] = [];

    constructor() { }

    ngOnInit() {
        $('.charity-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            mobileFirst: true,
        });
    }


}