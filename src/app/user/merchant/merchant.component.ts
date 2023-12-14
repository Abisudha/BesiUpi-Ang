import { Component } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent {

  addMerchantSelection: boolean = false;
  viewMerchantSelection : boolean = false;
  
  onMerchantAction(option:string){
    if(option == 'add'){
      this.addMerchantSelection = true;
      this.viewMerchantSelection = false;
    }else{
      this.addMerchantSelection = false;
      this.viewMerchantSelection = true;
    }
  }
}
