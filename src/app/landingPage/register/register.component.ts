import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  //loose Coupling - Dependency Injection
    constructor(private httpClient : HttpClient, private router : Router){}

  userName: string = '';
  password: string = '';
  cfPassword: string = '';
  mobile: string = '';
  email: string = '';
  msg : string = '';

  validateUserData() {
    if(this.userName != '' && this.mobile != '' && this.email != '' 
      && this.password != '' && this.cfPassword != '' 
      && this.password == this.cfPassword){
        return true;
       }
      else{
        this.msg = "Need all data and Password and Confirm Password should be same";
      }
    return false;
  }

  registerUser() {
    if (this.validateUserData()) {

      //step1 getdata
      //step2 create obj
      let user = {
        username: this.userName,
        mobile: this.mobile,
        email: this.email,
        password: this.password
      }
      //step3 send to api as postcall
      //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
      this.httpClient.post("https://retoolapi.dev/IBQleY/besiUpiUser",user).subscribe(
        () => {
          this.msg = "Registered Successfully... Please Login to continue....";
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 3000);
        },
        error => {
          this.msg = "Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.";
        }
      );
    }
  }

  resetFormFields() {
    this.userName = '';
    this.password = '';
    this.cfPassword = '';
    this.mobile = '';
    this.email = '';
  }
}
