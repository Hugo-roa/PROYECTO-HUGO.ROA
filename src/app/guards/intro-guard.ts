import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

  

export const introGuard: CanActivateFn = () => {
  const router = inject(Router);
  const introSeen = localStorage.getItem('introSeen');
 
  if (introSeen !== 'true') {
    return router.parseUrl('/intro')
  }
  
  return true;

   
  }
    


