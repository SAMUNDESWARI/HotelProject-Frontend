import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { HotelComponent } from './hotel/hotel.component';
import { HeaderComponent } from './header/header.component';
import { SharedService } from './shared.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CheckComponent } from './check/check.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { SummaryComponent } from './summary/summary.component';
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'city', component: CityComponent},
  {path: 'hotel', component: HotelComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'hoteldetails/:hotelCode',component:HoteldetailsComponent},
  {path:'summary',component:SummaryComponent},
  {path:'bookingsuccess',component:BookingsuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    HotelComponent,
    HeaderComponent,
    AboutusComponent,
    ContactComponent,
    FooterComponent,
    CheckComponent,
    HoteldetailsComponent,
    SummaryComponent,
    BookingsuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
