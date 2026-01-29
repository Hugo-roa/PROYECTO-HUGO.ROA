import { Injectable } from '@angular/core';
import { StorageService } from './storage';
import { __await } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private storagService:StorageService) {}

  async loginUser(credentials: any){
    
    return new Promise((accept, reject) => {
      if (
        credentials.email == "hugo@gmail.com" &&
        credentials.password =='12345678'
      ){
        
       this.storagService.set('login',true);
       console.log( 'login = true guardado en ionic Storage'); 
       
       
      accept('login correcto');
      
      }else{
        reject('login incorrecto');
      }
      
    
    })
  }
  
  async registerUser(credentials: any) {
    return new Promise((resolve, reject) => {

     if ( credentials.nombre == "hugo" && 
          credentials.apellido == "roa"&& 
          credentials.email == "hugo@gmail.com" && 
          credentials.password == '12345678'
         ){
         this.storagService.set('register',true);
          console.log('register = true guardado en ionic Storage');      
         
        resolve('registro correcto');
        } else {
        reject('registro incorrecto');
     }

  })
}

  
}
  

