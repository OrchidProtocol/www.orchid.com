import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

const MENU_TRANSITION = "1000ms ease-in";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('menuSlideOpen', [
      transition(':enter', [
        style({
          right: '-257px'
        }),
        animate(MENU_TRANSITION, style({ 'right': 0 }))
      ]),
      transition(':leave', [
        style({
          'right': 0,
          'overflow': 'hidden'
        }),
        animate(MENU_TRANSITION, style({ 'right': '-275px' }))
      ])
    ]),

  ]
})
export class MainNavComponent implements OnInit {

  constructor() { }
  
  public menuOpened: boolean = false;

  ngOnInit() {
    
  }

}
