import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  private leftLink: string;
  private leftPage: string;
  private downLink: string;
  private thisHeading: string;
  private rightLink: string;
  private rightPage: string;
  private pageTitle: string;
  private pagePrefix: string;
  private pageDescription: string;

  ngOnInit() {
    switch ( this.router.url ) {
      case '': {
        this.leftLink = '/game';
        this.leftPage = 'Our Game';

        this.rightLink = '/projects';
        this.rightPage = 'Our Projects';

        this.downLink = '#';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' Breathing Rubber Duckies';
        this.pagePrefix = 'Fire';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
        break;
      }

      default: {
        this.leftLink = '/game';
        this.leftPage = 'Our Game';

        this.rightLink = '/projects';
        this.rightPage = 'Our Projects';

        this.downLink = '/#team';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' Breathing Rubber Duckies';
        this.pagePrefix = 'Fire';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
      }
    }
  }

}
