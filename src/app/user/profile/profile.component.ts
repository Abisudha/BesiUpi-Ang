import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{


  userName : string = '';
  mobile : string = '';
  email : string = '';
  accounts : any = [];
  accNo : string = '';
  balance : string = '';
  bankName : string = '';
  addAccLink : string = '/addAccount';
  accUrl : string = 'https://retoolapi.dev/RL6DNH/besiUpiAcc';

  constructor(private httpClient: HttpClient){
    
  }

  ngOnInit(): void {
    this.showProfile();
  }

  showProfile(){
    let userMobile = sessionStorage.getItem('userMobile') || '';
    let apiUrl = ApiUrls.userApi + "?mobile=" + userMobile;
    this.httpClient.get(apiUrl).subscribe(
      (data: any) => {
        if(data.length > 0){
          this.userName = data[0].username;
          this.email = data[0].email;
          this.mobile = data[0].mobile;
          sessionStorage.setItem('userName', this.userName);
        } 
      },
      error => {}
    );
    let accApiUrl = ApiUrls.accountApi + '?mobile=' + userMobile;
    this.httpClient.get(accApiUrl).subscribe(
      (data: any) => {
        if(data.length > 0){
          // this.accNo = data[0].accNo;
          // this.balance = data[0].balance;
          // this.bankName = data[0].bankName;
          this.accounts = data;
        } 
      },
      error => {}
    );
    
  }
}
