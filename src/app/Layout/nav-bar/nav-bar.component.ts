import {Component, OnInit} from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:one-variable-per-declaration
    const toggleButton = $('.menu-toggle'),
      nav = $('.main-navigation');

    // toggle button
    // tslint:disable-next-line:only-arrow-functions
    toggleButton.on('click', function(e) {
      e.preventDefault();
      toggleButton.toggleClass('is-clicked');
      nav.slideToggle();
    });

    // nav items
    // tslint:disable-next-line:only-arrow-functions
    nav.find('li a').on('click', function() {
      // update the toggle button
      toggleButton.toggleClass('is-clicked');
      // fadeout the navigation panel
      nav.fadeOut();
    });
  }

}
