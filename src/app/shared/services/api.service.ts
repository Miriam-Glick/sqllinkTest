import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/Login.interface';
import { Project } from '../interfaces/project.interface';
import { User } from '../interfaces/user.interface';
import { ApiRoutes } from './api.routes';
import { UseService } from './use.service';
// import configurl from '../../../assets/config/config.json'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://localhost:52056";
  constructor(
    private http: HttpClient,
   private userService:UseService
  ) { }

  Login(req?: Login): Observable<User> {
    return this.http.post<User>(ApiRoutes.LOGIN, { req });
  }
  // Info(req?: null): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.userService.token}`
  //   })
  //   return this.http.post(ApiRoutes.GET_INFO,req,{headers:headers} );
  // }
  Info(req?: null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.token}`
    })
    return this.http.get(ApiRoutes.GET_INFO, );
  }

}
