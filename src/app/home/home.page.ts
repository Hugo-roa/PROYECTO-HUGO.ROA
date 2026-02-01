import { Component, OnInit } from '@angular/core';
import { IonicModule,ModalController}from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/storage';
import {  Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule,CommonModule,],
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
      image: "https://tse2.mm.bing.net/th/id/OIP.2Pswx_yWlcV_NzPR4EWUKwHaE7?pid=Api&P=0&h=180",
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

  tracks: any;
  albums: any;
  localArtists: any;
  artists: any;
  song: any = {
    name: '',
    preview_url: '',
    playing: false
  };
  currentSong: any;
  newTime: any;
  favorites: any[] = [];
  isFavorite: boolean = false;
  constructor(private storageService: StorageService, 
   private router: Router, private musicService: MusicService,private modalController:ModalController){}
   
  async goForwar() {
  console.log(' Volviendo a Intro');

  
  this.tema = 'claro';

  
  this.router.navigateByUrl('/intro', { replaceUrl: true });
}


  
  async ngOnInit () {
    this.loadArtists();
    this.getLocalArtists();
    this.loadAlbums();
    this.loadTracks();
    this.loadFavorites();
    
    await this.loadStorageData();
    this.simularCargaDatos();
  
  }

  async simularCargaDatos() {
    const data = await this.obtenerDatosSimulados();
  
  }
  obtenerDatosSimulados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['rock', 'pop', 'balada', 'llanera']);
    }, 6000);
  });
}

  loadTracks(){
    this.musicService.getTracks().then(tracks =>{
     this.tracks= tracks;
    
    })
  }

  loadAlbums(){
    this.musicService.getAlbums().then(albums =>{
     this.albums= albums;
     
    })  

  }

   loadArtists(){
    this.musicService.getArtists().then(artists =>{
     this.artists= artists;
    
    })  

  }


  getLocalArtists(){
    this.localArtists = this.musicService.getLocalArtist();
    
  }
  
  async showSongs(albumId: string){
   
    const songs = await this.musicService.getSongsByAlbum(albumId);
   
    const modal=await this.modalController.create({
      component:SongsModalPage,
      componentProps: {
        songs:songs
      }
    });
    modal.present();
  }

  async showSongsArtist(artistId: string){

    
    
    const songs = await this.musicService.getSongsByArtist(artistId);
    
    const modal=await this.modalController.create({
      component:SongsModalPage,
      componentProps: {
        songs:songs
      }
    });
    modal.onDidDismiss().then((result)=>{
      if (result.data){
        
        this.song = result.data
        this.checkIfFavorite();
      }
    })
    modal.present();
  }

  play(){
    this.currentSong = new Audio(this.song.preview_url)
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate",()=>{
      this.newTime = this.currentSong.currentTime /this.currentSong.duration;
    })
    this.song.playing = true;
  }
  pause(){
    this.currentSong.pause();
    this.song.playing=false;
  }

  formatTime(seconds: number){
    if (!seconds || isNaN(seconds)) return "0:00"
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = Math.floor(seconds %60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`

  }

  getRemainingTime(){
    if (!this.currentSong?.duration || !this.currentSong?.currentTime){
      return 0;
    }
    return this.currentSong.duration - this.currentSong.currentTime;
  }

  async loadFavorites() {
  const favs = await this.storageService.get('favorites');
  this.favorites = favs || [];
  }

  checkIfFavorite() {
  this.isFavorite = this.favorites.some(
    fav => fav.id === this.song.id
  );
  }

  async toggleFavorite() {
  if (!this.song?.id) return;

  const index = this.favorites.findIndex(
    fav => fav.id === this.song.id
  );

  if (index === -1) {
    
    this.favorites.push(this.song);
    this.isFavorite = true;
    console.log('Agregada a favoritos');
  } else {
    
    this.favorites.splice(index, 1);
    this.isFavorite = false;
    console.log('eliminada de favoritos');
  }
    await this.storageService.set('favorites', this.favorites);
    console.log(' Favoritos:', this.favorites);
  }

  async loadStorageData(){
    const savedtheme = await this.storageService.get('theme');
    if (savedtheme){ 
      this.tema = savedtheme;
    }

  
    
  
  }
  tema: 'oscuro' | 'claro' = 'oscuro';

  async cambiartema() {

  if (this.tema === 'oscuro') {
    this.tema = 'claro';

    this.colactualtexto = this.colosctexto;
    this.colactualtitulo = this.colosctitulo;
    this.colactualfondo = this.coloscfondo;
    this.colactualhome = this.coloschome;

  } else {
    this.tema = 'oscuro';

    this.colactualtexto = this.colclatexto;
    this.colactualtitulo = this.colclatitulo;
    this.colactualfondo = this.colclafondo;
    this.colactualhome = this.colclahome;

     await this.storageService.set('theme', this.tema)
    console.log('tema Guardado:')  

    await this.storageService.set('theme', this.tema);
    console.log(' Tema guardado en Ionic Storage:', this.tema);
  }
  }

  

}  
   


  
 

 

  
    
  


  
