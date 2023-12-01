import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCliet: HttpClient) { }


  getApiData(url: string){
    return this.httpCliet.get(url);
  }

  //["userName=abi", "mobile=1478526698"]
  getApiDataByfilter(url: string, recordfilters: any){
    let appliedFilters = "";
    for(let recFilter of recordfilters){
      if(appliedFilters != "")
        appliedFilters += "&" + recFilter;
      else
        appliedFilters += recFilter;
    }
    return this.httpCliet.get(url + "?" + appliedFilters);
  }

  postApiData(url: string, requestbody : any){
    return this.httpCliet.post(url, requestbody);
  }

  putApiData(url: string,recordId: string, requestbody: any){
    return this.httpCliet.put(url + "/" + recordId, requestbody);
  }

  deleteApiData(url: string, recordId: string){
    return this.httpCliet.delete(url + "/" + recordId);
  }
}

