import { Component, OnInit } from '@angular/core';
import { ICity } from '../city/city.model';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  
  constructor(private service: SharedService) { }
  hotel = [] as ICity[];


  ngOnInit(): void {
    var obj = localStorage.getItem('name');
    console.log(obj);
    var checkin = localStorage.getItem('checkin');
    console.log(checkin);
    
    var checkout = localStorage.getItem('checkout');
    console.log(checkout);
    this.getHotel(obj, checkin, checkout );
   
  }

  getHotel(obj: any, obj1: any, obj2: any){
    this.service.gethotel(obj,obj1,obj2).subscribe({
      next: (out: any) => {
        this.hotel = out as ICity[];
        console.log(this.hotel);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => console.log("completed")
    });
  }

}
