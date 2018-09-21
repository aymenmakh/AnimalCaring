import { User } from './../model/user';

import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private url : string ='http://localhost:18080/seahawks-web/rest/';
  private header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  constructor(private http: Http) { }

  registerAsOrganisation(org: User) {
        return this.http.post(this.url+"organisation",org);
      }

  registerAsMember(member: User) {
    return this.http.post(this.url+"member",member);
  }
  getUserById(u : User){
    return this.http.post(this.url+"users/getFull",u)
    .map((response:Response)=>response.json())
    .map((res=>new User(res.id,res.login,res.email,res.password,res.photo,res.phoneNumber,res.token,res.lastLogin,res.status,res.address,res.role,res.firstName,res.lastName,res.vet,res.foundDate,res.orgName)));
  }
  
  login(username: string, password:string) {
    //let body = new URLSearchParams();
    let body = `username=${username}&password=${password}`;
    //body.set('username', username);
    //body.set('password', password);
    
    return this.http.post(this.url+"users/authentificate", body,{headers: this.header})
                .map((response: Response) => {
                    let user = response.json();
                    if (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        localStorage.setItem('currentUserId',JSON.stringify(user.id))
                    }
                });
    
  }

 
  
  /*login(username, password) {

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post(this.url+"users/authentificate", {'username': username, 'password':  password}, this.headers)
        .map(response => {
            let user = response.json();
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }
    );
  }*/
}
