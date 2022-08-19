import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Ihoteldetails } from './hoteldetailsmodule';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.css']
})
export class HoteldetailsComponent implements OnInit {

  hotelList=[] as Ihoteldetails[];

  hotel : any | undefined = [] as Ihoteldetails[];
  

  constructor(private service:SharedService, private route: ActivatedRoute) { }
  checkin: any| null = "";
  checkout: any| null = "";
  className: any|null="";
  item = {} as Ihoteldetails;
   a : any ;
   totalprice: any = 0;
length : any ;
price:any;
hotelname:any;
  ngOnInit(): void {
      this.a = this.route.snapshot.paramMap.get("hotelCode");
    localStorage.setItem('hotel', this.a);

    this.loadData(this.a);
    console.log(this.a);
    this.checkin=localStorage.getItem('checkin');
    console.log(this.checkin);
    this.checkout=localStorage.getItem('checkout');
    console.log(this.checkout);
    this.length=JSON.parse(localStorage.getItem('length') || '{}'); 
    //this.price=localStorage.getItem('price');

   


    //this.checkout=localStorage.getItem('className');
    //console.log(this.checkout);


  }

  loadData(obj: any) {
    this.service.gethoteldetails(  obj).subscribe(
      {
        next: (out: any) => {
          this.hotel = out as Ihoteldetails[];
          console.log(this.hotel);

          this.item = this.hotel.find((x: { hotelcode: number; }) => x.hotelcode == this.a);
   // console.log(this.item);
    this.hotel.forEach((element: any) => {
      this.totalprice = element.price * this.length;
      this.hotelname=element.hotelName;
      localStorage.setItem('hotelName',element.hotelName);
      localStorage.setItem('roomid', element.roomId); 
      localStorage.setItem('totalprice', this.totalprice); 
      this.hotelname=localStorage.getItem('hotelName') || '{}';
      
    });
     
    console.log(this.totalprice);

          //console.log(this.a);

        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => console.log("Completed")
        
      }
    );
  }
}
