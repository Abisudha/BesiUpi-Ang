import { Component, OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  mobile : string ='';
  imgName : string = '';
  imgStatus : boolean = false;
  profileRecord : any ;
  imgUrl : string = '../../../assets/images/';

  ngOnInit(): void {
    this.getProfile();
  }

  constructor(private apiService : ApiService){}

  getProfile(){
    let mobile = sessionStorage.getItem('userMobile') || '';
    let recordFilters = ['mobile='+mobile];
    this.apiService.getApiDataByfilter(ApiUrls.profileApi, recordFilters).subscribe(
    (data: any) => {
      if(data != null && data.length > 0){
        this.profileRecord = data[0];
        this.profileRecord.imgName = this.imgUrl + this.profileRecord.imgName + ".PNG";
      }
    },
    err => {

    }
    );
  }

}
