import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/storage';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  colclafondo = 'var(--color-claro-fondo)';
  coloscfondo = 'var(--color-oscuro-fondo)';
  colactualfondo= this.coloscfondo;

  colclatexto = 'var(--color-claro-texto)'; 
  colosctexto = 'var(--color-oscuro-texto)';
  colactualtexto = this.colosctexto;

  colclatitulo = 'var(--color-claro-titulo)';
  colosctitulo = 'var(--color-oscuro-titulo)';
  colactualtitulo = this.colosctitulo;

  colclahome = 'var(--color-claro-home)';
  coloschome = 'var(--color-oscuro-home)';
  colactualhome = this.coloschome;

  

  genres = [
    { 
      title: "musica rock",
      image: "https://sp.yimg.com/ib/th/id/OIP.y1tzW0Afisqoyxt2FlcCcQAAAA?pid=Api&w=148&h=148&c=7&rs=1",
      description: "Se conoce como rock a un conjunto de géneros variados de música popular, descendientes del rock and roll original, nacido en los Estados Unidos en la década de 1950",

    },

    {
      title: "musica pop",
      image: "https://www.musicgrotto.com/wp-content/uploads/2022/12/vecteezy_pop-music-vintage-3d-vector-lettering-retro-bold-font_7379506.jpg",
      description: "Es un género de música popular que tuvo su origen a finales de los años 1950 como una derivación del Pop tradicional, en combinación con otros géneros musicales que estaban de moda en aquel momento.",
    },

    {
      title: "musica balada",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi15HJL_Noo6houhIbBluEkB_IIINfVKhEDvVPNyqlLaGiCLy36-drPq2bLsbupr0oP-xf0zD74eLaK000VxUONH9JAFCWtWBi8a0ViY5LtJaSG5VewLJYLbpPqA3GkDSd5H402PVM88WKp5M4kAzNSJ5Md3VIGE_1zlghvpO0JqAQyKtJGJtWwiCKn/s300/baladas-2.jpg",
      description: " Es un género de música popular que tuvo su origen a finales de los años 1950 como una derivación del Pop tradicional, en combinación con otros géneros musicales que estaban de moda en aquel momento.",

    },
  
    
    {
      title: "musica llanera",
      image: "https://danzamundial.net/wp-content/uploads/arpa-llanera-venezolana-tallada.webp",
      description: "La música llanera, también conocida como joropo, es mucho más que un género musical; es la expresión cultural vibrante y apasionada de los Llanos Orientales de Colombia y Venezuela. Es una manifestación artística que refleja la vida, las costumbres, el paisaje y el sentir de los llaneros",

    }
  

  ]
  constructor(private storageService: StorageService, 
   private router: Router) {}

  goForwar() {
    console.log( "ir a intro")
    this.router.navigateByUrl('/intro');
   }
 
  async ngOnInit () {
    await this.loadStorageData();
  }

  async loadStorageData(){
    const savedtheme = await this.storageService.get('theme');
    if (savedtheme){ 
      this.colactualtexto = savedtheme;

    }
  }
  async cambiarcolor() {
    
    this.colactualtexto = this.colactualtexto === this.colosctexto ? this.colclatexto : this.colosctexto ;
    await this.storageService.set('theme', this.colactualtexto)
    console.log('tema Guardado:', this.colactualtexto)  
  }

  cambiarcolortitulo() {

    this.colactualtitulo = this.colactualtitulo === this.colosctitulo ? this.colclatitulo : this.colosctitulo;
  }

  cambiarcolorfondo() {

    this.colactualfondo = this.colactualfondo === this.coloscfondo ? this.colclafondo : this.coloscfondo ;

  }

  cambiarcolorhome() {

    this.colactualhome = this.colactualhome === this.coloschome ? this.colclahome : this.coloschome ;

  }
  goForward() {}
    
  

}
  
