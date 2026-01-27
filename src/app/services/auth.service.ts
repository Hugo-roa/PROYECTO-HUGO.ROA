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


  
}
  

