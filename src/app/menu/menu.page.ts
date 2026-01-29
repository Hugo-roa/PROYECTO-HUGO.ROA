import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StorageService } from '../services/storage';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]

})

export class MenuPage implements OnInit {

  constructor(private storageService: StorageService,
  private router: Router) { }

  ngOnInit() {
  }


 async logout() {
  console.log('Cerrando sesión');

  // borrar login del Ionic Storage
  await this.storageService.remove('login');
  console.log('login eliminado del Ionic Storage');

  // redirigir a login
  this.router.navigateByUrl('/login', { replaceUrl: true });
}

}
