import { Router } from '@angular/router';
import { UserService } from './../service/user.servie';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _ServiceUser : UserService,private router: Router) {
    
   }

  ngOnInit() {
  }

  login(username: HTMLInputElement,password: HTMLInputElement){
    console.log(username.value);
    console.log(password.value);
    this._ServiceUser.login(username.value,password.value).subscribe(resp=>{
      console.log(resp);
     // console.log("user Id from localStorage:"+localStorage.getItem('currentUserId'));
    })
    this.router.navigate(['/all']);
    
  }

}
