import { inject } from '@angular/core';
import { HttpInterceptorFn} from '@angular/common/http';

import { UserService } from '../services/user.service';


export const authInterceptor: HttpInterceptorFn = (reg,next) => {
  const userService = inject(UserService);
  const token = userService.getToken();

  if (token) {
    const cloned = reg.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(reg);
};
