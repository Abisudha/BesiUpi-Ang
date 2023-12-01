import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  userName : string = '';
  password : string = '';
  msg : string = '';

  constructor(private apiService: ApiService, private router: Router){}

  resetData(){
    this.userName = '';
    
    this.password = '';
  }

  validateLogin(){

    this.msg = '';
    if(this.userName != '' && this.password != ''){
      let appliedFilters = [];
      appliedFilters.push("username=" + this.userName);
      appliedFilters.push("password=" + this.password);
      this.apiService.getApiDataByfilter(ApiUrls.userApi, appliedFilters).subscribe(
        (data : any)=> {
          console.log(data);
          if(data.length > 0 && data[0].username == this.userName && data[0].password == this.password){
            sessionStorage.setItem('userMobile', data[0].mobile);
            this.router.navigate(['/profile']);
          }else{
            this.msg = "Invalid UserName or Password...";
          }
        },
        error => {}
      );
    }else{
      this.msg = "Username or Password is missing..."
    }
  }

}
