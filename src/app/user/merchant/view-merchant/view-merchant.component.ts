import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-merchant',
  templateUrl: './view-merchant.component.html',
  styleUrls: ['./view-merchant.component.scss']
})
export class ViewMerchantComponent implements OnInit{

  @Input() merchantForm : any;

  ngOnInit(): void {
    console.log(this.merchantForm);
  }
}
