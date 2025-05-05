import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ExploreComponent } from './Pages/explore/explore.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { HeroSliderComponent } from './Components/hero-slider/hero-slider.component';
import { TopTouristPlaceComponent } from './Components/top-tourist-place/top-tourist-place.component';
import { CardComponent } from './Components/card/card.component';
import { TopTouristPlacePageComponent } from './Pages/top-tourist-place-page/top-tourist-place-page.component';
import { CardsPageComponent } from './Pages/cards-page/cards-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TravelTypesComponent } from './Components/travel-types/travel-types.component';
import { IndianTemplesComponent } from './Components/indian-temples/indian-temples.component';
import { MyTripBookingComponent } from './Components/my-trip-booking/my-trip-booking.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { PrivacyComponent } from './Pages/privacy/privacy.component';
import { HelppageComponent } from './Pages/helppage/helppage.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { DestinationsComponent } from './Components/destinations/destinations.component';
import { ToursComponent } from './Components/tours/tours.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { TravelGuidesComponent } from './Components/travel-guides/travel-guides.component';
import { TempleCardComponent } from './Components/temple-card/temple-card.component';
import { TopTemplesComponent } from './Components/top-temples/top-temples.component';
import { AllTemplesComponent } from './Pages/all-temples/all-temples.component';
import { TempleDetailsComponent } from './Pages/temple-details/temple-details.component';
import { TopCouplesComponent } from './Components/top-couples/top-couples.component';
import { CoupleDetailsComponent } from './Pages/couple-details/couple-details.component';
import { AllCouplesComponent } from './Pages/all-couples/all-couples.component';
import { AllFamilyTripsComponent } from './Pages/all-family-trips/all-family-trips.component';
import { FamilyTripDetailsComponent } from './Pages/family-trip-details/family-trip-details.component';
import { FeaturedFamilyTripsComponent } from './Components/featured-family-trips/featured-family-trips.component';
import { FeaturedMountainTripsComponent } from './Components/featured-mountain-trips/featured-mountain-trips.component';
import { AllMountainTripsComponent } from './Pages/all-mountain-trips/all-mountain-trips.component';
import { MountainTripDetailsComponent } from './Pages/mountain-trip-details/mountain-trip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    NavbarComponent,
    ExploreComponent,
    ContactComponent,
    AboutComponent,
    HeroSliderComponent,
    TopTouristPlaceComponent,
    CardComponent,
    TopTouristPlacePageComponent,
    CardsPageComponent,
    FooterComponent,
    TravelTypesComponent,
    IndianTemplesComponent,
    MyTripBookingComponent,
    FaqComponent,
    TermsComponent,
    PrivacyComponent,
    HelppageComponent,
    BlogComponent,
    CareersComponent,
    DestinationsComponent,
    ToursComponent,
    ActivitiesComponent,
    TravelGuidesComponent,
    TempleCardComponent,
    TopTemplesComponent,
    AllTemplesComponent,
    TempleDetailsComponent,
    TopCouplesComponent,
    CoupleDetailsComponent,
    AllCouplesComponent,
    AllFamilyTripsComponent,
    FamilyTripDetailsComponent,
    FeaturedFamilyTripsComponent,
    FeaturedMountainTripsComponent,
    AllMountainTripsComponent,
    MountainTripDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
