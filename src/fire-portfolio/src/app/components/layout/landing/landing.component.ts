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

        this.rightLink = '/botic';
        this.rightPage = 'Botic';

        this.downLink = '#';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' are a Multimedia and Software Group';
        this.pagePrefix = 'We';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
        break;
      }

      case '/home': {
        this.leftLink = '/game';
        this.leftPage = 'Our Game';

        this.rightLink = '/botic';
        this.rightPage = 'Botic';

        this.downLink = '#';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' are a Multimedia and Software Group';
        this.pagePrefix = 'We';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
        break;
      }

      case '/game': {
        this.leftLink = '/horror';
        this.leftPage = 'Horror Short';

        this.rightLink = '/home';
        this.rightPage = 'Welcome';

        this.downLink = '/game#theGame';
        this.thisHeading = 'Our Game';

        this.pageTitle = ' Game';
        this.pagePrefix = 'Our';
        this.pageDescription = ' This is for our nonexistent video game.';
        break;
      }

      default: {
        this.leftLink = '/game';
        this.leftPage = 'Our Game';

        this.rightLink = '/botic';
        this.rightPage = 'Botic';

        this.downLink = '/#team';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' are a Multimedia and Software Group';
        this.pagePrefix = 'We';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
      }
    }
  }

}