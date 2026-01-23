import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  
})


export class AppComponent {
  
  constructor(private router: Router) {
    this.checkIntro();
  } 


  checkIntro() {
    const introSeen = localStorage.getItem('introSeen');
    
  }
}