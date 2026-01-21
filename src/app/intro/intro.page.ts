import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { StorageService } from '../services/storage';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  constructor (private router: Router,private Storageservice : StorageService ){
  //this.router.navigateByUrl("/home");
  }
  
  gohome(){
    //marcar la intro como vista
    localStorage.setItem('introSeen', 'true');
    //navegar a home
    this.router.navigateByUrl('/home');
    console.log( 'introSeen DESDE INTRO:', localStorage.getItem('introSeen'));
    console.log(' volver');
  }
  ngOnInit() {
    this.Storageservice.set( 'introvisto', true);
    console.log('Intro abierta introvisto guardado en storage');
    localStorage.setItem( 'introSeen', 'true');
  }

  goHome() {
    console.log("volver")
    this.router.navigateByUrl("/home");
  }

  finalizarIntro(){
    localStorage.setItem('introSeen', 'true');
    this.router.navigateByUrl('/home');
  }

}
