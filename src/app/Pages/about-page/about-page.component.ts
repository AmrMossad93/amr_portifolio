import {Component, OnInit} from '@angular/core';
import Typed from '../../../assets/js/typed.min.js';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const typed = new Typed('#typed_2', {
      strings: [
        'Front-End Web Developer',
        'Front-End Mobile Developer',
        'UI/UX Developer',
        'UI/UX Designer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
    const type = new Typed('#typed_3', {
      strings: [
        'Sociable',
        'Creative & Cooperative In Team Work',
        'Self-Motivated',
        'Serious To Learn ',
        'Stable Under Work Pressures',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
  }

}
