import { Component, ElementRef, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { StorageService } from '../services/storage';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { addIcons } from 'ionicons';
import { chevronBackOutline , chevronForwardOutline } from 'ionicons/icons';
import { ApplicationConfig } from '@angular/core';
import { provideIonicAngular } from '@ionic/angular/standalone';



export const appConfig: ApplicationConfig = {
  providers: [
    provideIonicAngular(),
  ],
};


addIcons({
  'chevron-back-outline': chevronBackOutline,
  'chevron-forward-outline': chevronForwardOutline
});


register();

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  

})


  
export class IntroPage implements OnInit, AfterViewInit {


 
  @ViewChild('swiper', { static: false })
   swiperE1!: ElementRef;

  swiper: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.swiper = this.swiperE1.nativeElement.swiper;
      console.log('SWIPER INSTANCE:', this.swiper);
    }, 0);
  }
  nextSlide() {
    console.log(this.swiper);
    this.swiper.slideNext();
  }
  prevSlide() {
    this.swiper.slidePrev();
  }

  
  

constructor (private router: Router,private Storageservice : StorageService ){}
  
  
ngOnInit() {
    
  }

async goHome() {
  await this.Storageservice.set('introSeen', true);
  console.log('✅ introSeen guardado en Ionic Storage');

  this.router.navigateByUrl('/home', { replaceUrl: true });
}
  
  
   


    genres = [
    { 
      title: "BIENVENIDO A PCA MUSIC",
      image: "https://tse2.mm.bing.net/th/id/OIP.6Gi8BdqiQgT9TxyWiOZ0ygHaE8?pid=Api&P=0&h=180",
      description:"MUSICA CON ESTILO . DESCUBRE,REPRODUCE Y DISFRUTA TU MUSICA ", 

    },

     { 
      title: "EXPLORA SIN LIMITES",
      image: "https://tse3.mm.bing.net/th/id/OIP.wFNupsS7IqzLjF0cH0yk7gHaEp?pid=Api&P=0&h=180",
      description:"ENCUENTRA CANCIONES, ARTISTAS Y PLAYLIST ", 

    },

     { 
      title: "PLAYLIST QUE SE ADAPTAN  A TI",
      image: "https://st2.depositphotos.com/1112040/50745/v/450/depositphotos_507452344-stock-illustration-music-note-app-icon-vector.jpg",
      description:"LISTAS CREADAS SEGUN TU ESTADO DE ANIMO", 

    },

     { 
      title: "LLEVA TU MUSICA A TODAS PARTES",
      image: "https://tse3.mm.bing.net/th/id/OIP.Ou0wyCRLbg4i_8ZFraYXFAHaFj?pid=Api&P=0&h=180",
      description:"ESCUCHA SIN CONEXION Y EN ALTA CALIDAD ", 

    },
  ]

}
