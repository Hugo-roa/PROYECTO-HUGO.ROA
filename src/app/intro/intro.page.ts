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
  

  ngOnInit() {
    this.Storageservice.set( 'introvisto', true);
    console.log('Intro abierta introvisto guardado en storage');
  }

  goHome() {
    console.log("volver")
    this.router.navigateByUrl("/home");
  }

}
