import { Injectable } from '@angular/core';
import {AppUser} from '../../models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUser:AppUser | null = null;

  constructor() { }

  authenticateUser(email: string, passwordHash: string):boolean {
    //TODO: Enpunkt einbinden, sobald existiert

    this.appUser = new AppUser(1,"test@mail","password", new Date(Date.now()),"Bizeps Brecher Bernd", 3,3,3,3,3,3,3,3,3,3,3)
    return true;
  }

  getCurrentUser(): AppUser | null {
    return this.appUser;
  }

  getUserId(): number | null {
    return this.appUser ? this.appUser.userID : null;
  }

  isAuthenticated(): boolean {
    return !!this.appUser;
  }

  logout(): void {
    this.appUser = null;
  }
}
