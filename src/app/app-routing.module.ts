import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ExploreComponent } from './Pages/explore/explore.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HeroSliderComponent } from './Components/hero-slider/hero-slider.component';
import { TopTouristPlaceComponent } from './Components/top-tourist-place/top-tourist-place.component';
import { TopTouristPlacePageComponent } from './Pages/top-tourist-place-page/top-tourist-place-page.component';
import { CardComponent } from './Components/card/card.component';
import { CardsPageComponent } from './Pages/cards-page/cards-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IndianTemplesComponent } from './Components/indian-temples/indian-temples.component';
import { MyTripBookingComponent } from './Components/my-trip-booking/my-trip-booking.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { PrivacyComponent } from './Pages/privacy/privacy.component';
import { HelppageComponent } from './Pages/helppage/helppage.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { DestinationsComponent } from './Components/destinations/destinations.component';
import { ToursComponent } from './Components/tours/tours.component';
import { TravelGuidesComponent } from './Components/travel-guides/travel-guides.component';
import { TopTemplesComponent } from './Components/top-temples/top-temples.component';
import { AllTemplesComponent } from './Pages/all-temples/all-temples.component';
import { TempleDetailsComponent } from './Pages/temple-details/temple-details.component';
import { TopCouplesComponent } from './Components/top-couples/top-couples.component';
import { AllCouplesComponent } from './Pages/all-couples/all-couples.component';
import { CoupleDetailsComponent } from './Pages/couple-details/couple-details.component';
import { FeaturedFamilyTripsComponent } from './Components/featured-family-trips/featured-family-trips.component';
import { FeaturedMountainTripsComponent } from './Components/featured-mountain-trips/featured-mountain-trips.component';
import { AllFamilyTripsComponent } from './Pages/all-family-trips/all-family-trips.component';
import { AllMountainTripsComponent } from './Pages/all-mountain-trips/all-mountain-trips.component';
import { FamilyTripDetailsComponent } from './Pages/family-trip-details/family-trip-details.component';
import { MountainTripDetailsComponent } from './Pages/mountain-trip-details/mountain-trip-details.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  { path: 'welcome', component: WelcomeComponent },
  {path:'home',component:HomeComponent},
  {path:'explore',component:ExploreComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'hero-slider',component:HeroSliderComponent},
  {path:'top-tourist-place',component:TopTouristPlaceComponent},
  {path:'top-tourist-place-page',component:TopTouristPlacePageComponent},
  {path:'card',component:CardComponent},
  {path:'cards-page/:id',component:CardsPageComponent},
  {path:'footer',component:FooterComponent},
  {path:'indian-temples',component:IndianTemplesComponent},
  {path:'my-trip-booking',component:MyTripBookingComponent},
   { path: 'faq', component: FaqComponent},
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'helppage', component: HelppageComponent },
  {path:'blog',component:BlogComponent},
  {path:'careers',component:CareersComponent},
  {path:'activites',component:ActivitiesComponent},
  {path:'destinations',component:DestinationsComponent},
  {path:'tours',component:ToursComponent},
  {path:'travel-guides',component:TravelGuidesComponent},
  { path: 'top-temples', component: TopTemplesComponent },
  { path: 'all-temples', component: AllTemplesComponent },
  { path: 'temple/:id', component: TempleDetailsComponent },
  { path: 'top-couples', component: TopCouplesComponent },
  { path: 'all-couples', component: AllCouplesComponent},
  { path: 'couple/:id', component: CoupleDetailsComponent},
  {path:'featured-family-trips', component:FeaturedFamilyTripsComponent},
  {path:'featured-mountain-trips', component:FeaturedMountainTripsComponent},
  {path:'all-family-trips', component:AllFamilyTripsComponent},
  {path:'all-mountain-trips', component:AllMountainTripsComponent},
  {path:'family-trip/:id',component:FamilyTripDetailsComponent},
  {path:'mountain-trip/:id', component:MountainTripDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
