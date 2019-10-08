import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-icons',
  templateUrl: './landing-icons.component.html',
  styleUrls: ['./landing-icons.component.css']
})
export class LandingIconsComponent implements OnInit {

  private film: string;
  private gaming: string;
  private desktop: string;

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.getIcons();

  }

  private getIcons() {
    switch (this.router.url) {
      case '/': {
        this.film = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="films">';
        this.gaming = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.desktop = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
        break;
      }

      case '/home': {
        this.film = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="films">';
        this.gaming = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.desktop = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
        break;
      }

      case '/game': {
        this.film = '';
        this.gaming = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.desktop = '';
        break;
      }

      default: {
        this.film = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="films">';
        this.gaming = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.desktop = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
      }
    }
  }
}
