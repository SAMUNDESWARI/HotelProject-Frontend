import { Component, OnInit } from '@angular/core';
import { ISummary } from '../summary/summarymodel';

@Component({
  selector: 'app-bookingsuccess',
  templateUrl: './bookingsuccess.component.html',
  styleUrls: ['./bookingsuccess.component.css']
})
export class BookingsuccessComponent implements OnInit {
  custfname="";
  hotelcode: string = '';
  checkout:string='';
  totalprice:number = 0 ;
  book : any | null= {} as ISummary;
  checkin: string='';
  hotelname:any;

  constructor() { }

  ngOnInit(): void {
    this.totalprice=JSON.parse(localStorage.getItem('totalprice')|| '{}');
    this.book.totalprice=this.totalprice;
    this.checkin=localStorage.getItem('checkin') || '{}';
    this.book.checkin=this.checkin;
    this.checkout=localStorage.getItem('checkout') || '{}';
    this.book.checkOut=this.checkout;
    this.hotelname=localStorage.getItem('hotelName') || '{}';
    this.book.hotelName=this.hotelname;
    
    

  }

}
