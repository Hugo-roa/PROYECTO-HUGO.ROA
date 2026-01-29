
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { StorageService } from './storage';


@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  async register(credentials: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.authService.registerUser(credentials);

        
        await this.storageService.set('registerData', credentials);
        await this.storageService.set('register', true);

        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  }
}
  

