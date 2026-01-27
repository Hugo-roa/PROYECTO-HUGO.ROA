import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage';
  

export const introGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const storageService = inject(StorageService);

  const introSeen = await storageService.get('introSeen');
  console.log(' introSeen desde guard:', introSeen);

  if (!introSeen) {
    return router.parseUrl('/intro');
  }

  return true;
};
