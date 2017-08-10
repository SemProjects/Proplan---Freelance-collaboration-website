import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 2500, noPause: true}}]
})
export class HeaderComponent implements OnInit {
constructor() {
        PageScrollConfig.defaultScrollOffset = 50;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing 
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }

  ngOnInit() {
  }

}


