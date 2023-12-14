import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.scss']
})
export class AddMerchantComponent implements OnInit{


  merchantForm : any;
  isMerchantSubmitted : boolean = false;
  constructor(){}

  ngOnInit(): void {
    this.merchantForm = this.getMerchantForm();

    // this.merchantForm = new FormGroup({
    //   mrName: new FormControl(''),
    //   mrNo: new FormControl(''),
    //   mrAddr: new FormControl(''),
    //   mrContact: new FormControl('')
    // });
  }

  getMerchantForm(){
    return new FormGroup({
      mrName: new FormControl(''),
      mrNo: new FormControl(''),
      mrAddr: new FormControl(''),
      mrContact: new FormControl('')
    });
  }

  onMerchantSubmit(){
    this.isMerchantSubmitted = true;
  }


}
