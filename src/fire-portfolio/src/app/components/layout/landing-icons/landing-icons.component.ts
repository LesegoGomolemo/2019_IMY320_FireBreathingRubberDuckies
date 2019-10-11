import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-icons',
  templateUrl: './landing-icons.component.html',
  styleUrls: ['./landing-icons.component.css']
})
export class LandingIconsComponent implements OnInit {

 public left: string;
 public center: string;
 public right: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getIcons();

  }

  private getIcons() {
    switch (this.router.url) {
      case '/': {
        this.left = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="films">';
        this.center = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.right = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
        break;
      }

      case '/home': {
        this.left = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="films">';
        this.center = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.right = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
        break;
      }

      case '/game': {
        this.left = '';
        this.center = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.right = '';
        break;
      }

      case '/botic': {
        this.left = '';
        this.center = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
        this.right = '';
        break;
      }
      
      case '/about': {
        this.left = '';
        this.center = '<img src="https://img.icons8.com/dotty/80/000000/business-group.png" alt="about">';
        this.right = '';
        break;
      }

      case '/erp': {
        this.left = '';
        this.center = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
        this.right = '';
        break;
      }
      
      case '/movie': {
        this.left = '';
        this.center = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="film">';
        this.right = '';
        break;
      }

      default: {
        this.left = '<img src="https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png" alt="films">';
        this.center = '<img src="https://img.icons8.com/wired/64/000000/controller.png" alt="games">';
        this.right = '<img src="https://img.icons8.com/wired/64/000000/web.png" alt="desktop">';
      }
    }
  }
}
