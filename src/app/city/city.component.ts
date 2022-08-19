import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ICity } from './city.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';




@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  selected = "";
  min: any;
  ci! : Date;
  co!: Date;
  length : any | number| bigint ;
   tdate: any = new Date();
   date = this.tdate.getDate();
  // price:any|number;
  loginForm!: FormGroup;

  constructor(private service:SharedService, private router: Router) { }

  cityList=[] as ICity[];
  


  ngOnInit(): void {

    if(this.date<10){
      this.date="0"+this.date;
    }
    var month:any = this.tdate.getMonth()+1;
    if(month<10){
      month="0"+month;
    }
    var year :any  = this.tdate.getFullYear();
    this.min = year +"-"+month+"-"+this.date;
    console.log(this.min);
    this.getCity();
    this.loginForm=new FormGroup({
      'city':new FormControl(null,Validators.required),
      'checkIn':new FormControl(null,Validators.required),
      'checkOut':new FormControl(null,Validators.required),
      // 'room':new FormControl(null,Validators.required),
      // 'adults':new FormControl(null,Validators.required)
    })
  }

  getCity(){
    this.service.getcity("api/Values/display").subscribe(
      {
        next: (out) =>{
        this.cityList = out as ICity[];
        console.log(this.cityList);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => console.log("completed")
    });
    
  
  }

  onselectchange(event: any)
  {
    console.log(event.target.value);
    localStorage.setItem('name', event.target.value);
    //this.router.navigate(['hotel']);
  }

  onchange(event : any){
    this.ci = event.target.value;
    console.log(this.ci);
    localStorage.setItem('checkin', this.ci.toString());
  }

  onchange2(event : any){
    this.co = event.target.value;
    console.log(this.co);
    localStorage.setItem('checkout', this.co.toString());
   

 
  }
  click(event: any){
    console.log(this.loginForm.value);
    this.loginForm.reset();
    var checkout  = new Date(this.co);
    var checkin = new Date(this.ci);
    // var Amount=new Number(this.price);
 
   var diff = Math.abs(checkin.getTime() - checkout.getTime());
 var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
 if(diffDays == 0){
  diffDays = 1;
 }
 localStorage.setItem('length', diffDays.toString());
console.log(diffDays);
 this.router.navigate(['hotel']);

 
//  var price=length*this.price;
// console.log(price);



  }

  // search(event : any){
    
   
  //     const regex = event.target.value;
       
  //     const found = this.cityList.next(event.target.value);
        
  //     console.log(found);
    
  // }
  get city() {
    return this.loginForm.get('city');
  }

  get checkIn() {
    return this.loginForm.get('checkIn');
  }
  get checkOut() {
    return this.loginForm.get('checkOut');
  }
  //  get room() {
  //   return this.loginForm.get('room');
  //  }
  //  get adults() {
  //   return this.loginForm.get('adults');
  // }

}
