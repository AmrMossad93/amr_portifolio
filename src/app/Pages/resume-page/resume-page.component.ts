import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  constructor() { }

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
