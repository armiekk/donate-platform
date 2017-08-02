import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // left drawer
    $('.button-collapse').sideNav();

    // right drawer
    $('.button-collapse-right').sideNav({
      menuWidth: 300,
      edge: 'right',
      closeOnClick: false,
      draggable: true,
      onOpen: null,
      onClose: null
    });
  }

}
