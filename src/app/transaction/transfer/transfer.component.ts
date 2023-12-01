import { Component, OnInit } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  selectedFromAcc : any = '';
  selectedToAcc : string = '';
  txnPin : string = '';
  txnAmt : string = '';
  msg : string = '';
  fromAccounts : any = [];
  toAccounts : any = [];
  accounts : any = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getUserAccounts();
  }


  transferAmount(){
    console.log(this.selectedFromAcc, this.selectedToAcc);
    let fromAcc = this.accounts.filter((acc: any)=> {
      return this.selectedFromAcc.split("/")[1].trim() == acc.accNo;
    })[0];
    let toAcc = this.accounts.filter((acc: any)=> {
      return this.selectedToAcc.split("/")[1].trim() == acc.accNo;
    })[0];
    console.log(fromAcc);
      console.log(toAcc);
    if(this.txnPin == fromAcc.pinNo && this.txnAmt <= fromAcc.balance){
      fromAcc.balance = Number(fromAcc.balance) - Number(this.txnAmt);
      toAcc.balance = Number(toAcc.balance) + Number(this.txnAmt);

      console.log(fromAcc);
      console.log(toAcc);

      // this.put(statem)

    }
  }



  loadToAccounts(){
    console.log(this.selectedFromAcc);
    let fromAcc = this.accounts.filter((acc: any)=> {
      return this.selectedFromAcc.split("/")[1].trim() == acc.accNo;
    })[0];
    this.toAccounts = this.accounts.filter((acc : any) => {
      return acc.bankName != fromAcc.bankName && acc.accNo != fromAcc.accNo;
    });

    this.selectedToAcc = this.toAccounts[0].bankName + " / " + this.toAccounts[0].accNo;
    console.log(this.toAccounts);
  }

  getUserAccounts(){

    let userMobile = sessionStorage.getItem('userMobile') || '';
    let recordFilter = [ "mobile="+userMobile];
    //Primary Accounts
    if(!this.getAccounts(recordFilter)){
      recordFilter = ["secMobile="+userMobile];
      this.getAccounts(recordFilter);
    }
    //     }else{
    //       recordFilter = ["secMobile="+userMobile];
    //       //Secondary Accounts
    //       this.apiService.getApiDataByfilter(ApiUrls.accountApi, recordFilter).subscribe(
    //         (data : any)=>{
    //           if(data != null && data.length > 0){
    //             this.accounts = data;
    //             this.fromAccounts = this.accounts;
    //             this.loadToAccounts();
    //           }
    //         },
    //         error => {
    //           this.msg = error;
    //         }
    //       );
    //     }
    //   },
    //   error => {
    //     this.msg = error;
    //   }
    // );
  }

  getAccounts(recordFilter : any) : any{
    this.apiService.getApiDataByfilter(ApiUrls.accountApi, recordFilter).subscribe(
      (data : any)=>{
        if(data != null && data.length > 0){
          this.accounts = data;
          this.fromAccounts = this.accounts;
          this.selectedFromAcc = this.fromAccounts[0].bankName + " / " + this.fromAccounts[0].accNo;
          this.loadToAccounts();
          return true;
        }
        return false;
      },
        error => {
          this.msg = error;
          return false;
        });
  }

}
