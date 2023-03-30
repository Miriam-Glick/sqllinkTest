import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UseService {
  private _userDetails = new BehaviorSubject<User>(null as any)
  public userDetails$:Observable<User>=this._userDetails.asObservable();

  constructor(
    private storage : StorageService, 
  ) { }

  set userDetails(userDetails :any)
  {
    this._userDetails.next(userDetails[0]) 
    this.storage.setSessionItem("token",userDetails[0].token)
  }

  get token():string | null{
    return this.storage.getSessionItem("token")
  }

  // isUserAuthenticated() {
  //   const token = sessionStorage.getItem("jwt");;
  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  public logOut = () => {
    this.storage.clearSessionStorage();
  }











}
