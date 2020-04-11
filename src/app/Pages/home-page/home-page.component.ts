import {Component, OnInit} from '@angular/core';
import Typed from '../../../assets/js/typed.min.js';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {

      $('#intro h1').fitText(1, {minFontSize: '42px', maxFontSize: '84px'});

    }, 100);
    const typed = new Typed('#typed', {
      strings: [
        'Software Engineer',
        'Programmer',
        'Freelancer'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  }

}
