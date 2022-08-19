import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  ApiUrl = environment.ApiUrl;

  constructor(private http:HttpClient) { }

  getcity(url : any){
    //const url = "api/Values/hote"
     return this.http.get(`${this.ApiUrl}${url}`);
    }

    gethotel(name: any, checkin: any, checkout: any){

      const url = "api/Values/AvailableHotel?check_IN=";
      console.log(`${this.ApiUrl}${url}`);
    
      return this.http.get(`${this.ApiUrl}${url}${checkin}&check_Out=${checkout}&city=${name}`);
    }

    gethoteldetails(a : any){
      const url = "api/Values/hotelcode?hotelcode=";
       return this.http.get(`${this.ApiUrl}${url}${a}` );
      }

    getCustomerData(obj:any) {
        const url = "api/Values/summary";
        return this.http.post(`${this.ApiUrl}${url}`,obj);
      }
}

