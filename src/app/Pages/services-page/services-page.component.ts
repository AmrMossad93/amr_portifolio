import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('#owl-slider').owlCarousel({
      navigation: false,
      pagination: true,
      itemsCustom: [
        [0, 1],
        [700, 2],
        [960, 3]
      ],
      navigationText: false
    });
  }

}
