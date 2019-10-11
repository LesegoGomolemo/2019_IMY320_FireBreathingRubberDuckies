import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  public leftLink: string;
  public leftPage: string;
  public downLink: string;
  public thisHeading: string;
  public rightLink: string;
  public rightPage: string;
  public pageTitle: string;
  public pagePrefix: string;
  public pageDescription: string;

  ngOnInit() {
    switch ( this.router.url ) {
      case '': {
        this.leftLink = '/game';
        this.leftPage = 'Our Game';

        this.rightLink = '/botic';
        this.rightPage = 'Botic';

        this.downLink = '#software';
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

        this.downLink = '#software';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' are a Multimedia and Software Group';
        this.pagePrefix = 'We';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
        break;
      }

      case '/game': {
        this.leftLink = '/movie';
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
        
      case '/erp': {
        this.leftLink = '/botic';
        this.leftPage = 'Botic';

        this.rightLink = '/about';
        this.rightPage = 'About Us';

        this.downLink = '/erp#ERP';
        this.thisHeading = 'ERP Ranger App';

        this.pageTitle = ' Ranger Application';
        this.pagePrefix = 'ERP';
        this.pageDescription = 'This is the ERP Ranger Application project.';
        break;
      }
        
      case '/about': {
        this.leftLink = '/erp';
        this.leftPage = 'ERP Ranger';

        this.rightLink = '/projects';
        this.rightPage = 'Project X';

        this.downLink = '/about#team';
        this.thisHeading = 'About Us';

        this.pageTitle = ' Us';
        this.pagePrefix = 'About';
        this.pageDescription = 'Let\'s introduce ourselves, shall we?';
        break;
      }

      case '/movie': {
        this.leftLink = '/projects';
        this.leftPage = 'Project X';

        this.rightLink = '/game';
        this.rightPage = 'Game';

        this.downLink = '/horror#horror';
        this.thisHeading = 'Horror Short';

        this.pageTitle = ' Strings Attached';
        this.pagePrefix = 'No';
        this.pageDescription = 'I\'ve got no strings to hold me down';
        break;
      }

      default: {
        this.leftLink = '/game';
        this.leftPage = 'Our Game';

        this.rightLink = '/botic';
        this.rightPage = 'Botic';

        this.downLink = '/#software';
        this.thisHeading = 'Welcome';

        this.pageTitle = ' are a Multimedia and Software Group';
        this.pagePrefix = 'We';
        this.pageDescription = 'We could all be reading a book right now, but let\'s watch rubber duckies spit fire.';
      }
    }
  }

}
