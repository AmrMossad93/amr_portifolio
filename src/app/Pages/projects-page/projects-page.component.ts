import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('.item-wrap a').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'
    });

    // tslint:disable-next-line:only-arrow-functions
    $(document).on('click', '.popup-modal-dismiss', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
    });

    const containerProjects = $('#folio-wrapper');

    // tslint:disable-next-line:only-arrow-functions
    containerProjects.imagesLoaded(function() {

      containerProjects.masonry({
        itemSelector: '.folio-item',
        resize: true
      });

    });
  }

}
