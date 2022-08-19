import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ISummary } from './summarymodel';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summaryForm!:FormGroup;
  summary=[] as ISummary[];
  obj : any | null= {} as ISummary;
  totalprice:number = 0 ;
  firstname ="";
  lastname="";
  email="";
   
  checkin!: string;
  checkout!: string;
  length : number = 0 ;
  hotelcode: string = '';
  roomid : number = 0;
  //tdate: any = new Date();
  // date = this.tdate.getDate();
  // newDate: any ;
  // currentDate = new Date();
  // model: any =   { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: this.currentDate.getDate() };
  // min:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.totalprice=JSON.parse(localStorage.getItem('totalprice')|| '{}');
    this.obj.amount = this.totalprice;
    console.log(this.totalprice);
    //this.obj.custfname= this.firstname;
    console.log(this.obj);
    //this.obj.custlname=this.lastname;
    console.log(this.obj);
    this.obj.emailAddress=this.email;
    console.log(this.obj);

    this.checkin=localStorage.getItem('checkin') || '{}';
    this.obj.checkIn=this.checkin;
    console.log(this.checkin);
    this.checkout=localStorage.getItem('checkout') || '{}';
    this.obj.checkOut=this.checkout;
    this.hotelcode = JSON.parse(localStorage.getItem('hotel') || '{}'); 
    this.roomid = JSON.parse(localStorage.getItem('roomid') || '{}'); 
    console.log(this.hotelcode);
    this.obj.hotelCode=this.hotelcode;
    this.obj.roomId=this.roomid;
    //console.log(this.date);
    console.log(this.obj);
    // console.log(this.length);
    //console.log(this.totalprice);
  //   if(this.model.day<10){
  //    this.model.day="0"+this.model.day;
  //   }
  //   //var month:any = this.model.getMonth()+1;
  //   if(this.model.month<10){
  //     this.model.month="0"+this.model.month;
  //   }
  //   //var year :any  = this.model.year;
  //   this.min = this.model.year +"-"+this.model.month+"-"+ this.model.day;
  //   console.log(this.min);
    
  // localStorage.setItem("date", this.min);
  // console.log(this.min);
  // this.obj.reservationId=this.min;
  // console.log(this.min);

  //this.obj.roomId = JSON.parse(localStorage.getItem('hotelcode') || '{}'); 
  this.summaryForm=new FormGroup({
    'firstname1':new FormControl(null,Validators.required),
    'lastname1':new FormControl(null,Validators.required),
    'email1' : new FormControl(null, [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    // room:new FormGroup(null,Validators.required),
    // adults:new FormGroup(null,Validators.required)
   })

}

loadPostCust(obj : any) {
  this.service.getCustomerData(obj).subscribe({
    next: (data) => {
      this.summary = data as ISummary[];
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log("Complete");
    }
  })
}

send(event: any){
  this.firstname = event.target.value;
  //console.log(event.target.value);
  //console.log(this.firstname);
  this.obj.custfname = this.firstname;
  console.log(this.obj);

  }
send1(event: any){
    this.lastname = event.target.value;
  //console.log(this.lastname);
  this.obj.custlname = this.lastname;
  console.log(this.obj);


}
send2(event: any){
    this.email = event.target.value;
  console.log(this.email);
  this.obj.emailAddress = this.email;
  console.log(this.obj);

}

sendit(){
  this.loadPostCust(this.obj);
}
click(event: any){
  console.log(this.summaryForm.value);
    this.summaryForm.reset();
}
get firstname1() {
  return this.summaryForm.get('firstname');
}

get lastname1() {
  return this.summaryForm.get('lastname');
}
get email1() {
  return this.summaryForm.get('email');
}

}
