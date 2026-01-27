import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}

  logiUser(credentials: any){
    return new Promise((accept, reject) => {
      if (
        credentials.email == "hugo@gmail.com" &&
        credentials.password =="12345678"
      ){
        accept("login correcto")
      }else{
        reject("login incorrecto")
      }
      
    
    })
  }


  
}
  

