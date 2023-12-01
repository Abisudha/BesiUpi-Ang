import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit{

  userName : string = '';
  mobile : string = '';
  bankName : string = '';
  accNo : string = '';
  balance : string = '';
  secMobile : string = '';
  pinNo : string = '';
  cfPinNo : string = '';
  msg : string = '';

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    this.getProfileValues();
  }

  getProfileValues(){
    this.userName = sessionStorage.getItem('userName') || '';
    this.mobile = sessionStorage.getItem('userMobile') || '';
  }

  addAccount(){
    if(this.userName != "" && this.mobile != "" 
      && this.balance != "" && this.accNo != "" && this.bankName != "" && this.pinNo != "" && this.pinNo == this.cfPinNo){
        let userAcc = {
          mobile: this.mobile,
          accNo: this.accNo,
          balance: this.balance,
          bankName: this.bankName,
          secMobile: this.secMobile,
          pinNo : this.pinNo
        }
        //step3 send to api as postcall
        //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
        this.apiService.postApiData(ApiUrls.accountApi, userAcc).subscribe(
          () => {
            this.msg = "Account Added Successfully...";
            setTimeout(()=>{
              this.router.navigate(['/profile']);
            }, 3000);
          },
          error => {
            this.msg = "Encounterd a problem. Unable to create add an account at this moment... Mannichooo... Plz try try again.";
          }
        );
      }else{
        this.msg = "Enter the mandatory fields and Pin should match with Confirm Pin";
      }
    }
}

