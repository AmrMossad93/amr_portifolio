import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AmrMossadCV-V3';

  ngOnInit(): void {
    $('.smoothscroll').on('click', function(e) {
      e.preventDefault();
      // tslint:disable-next-line:one-variable-per-declaration
      const target = this.hash,
        // tslint:disable-next-line:prefer-const
        $target = $(target);
      $('html, body').stop().animate({
        scrollTop: $target.offset().top
        // tslint:disable-next-line:only-arrow-functions
      }, 800, 'swing', function() {
        window.location.hash = target;
      });
    });
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
