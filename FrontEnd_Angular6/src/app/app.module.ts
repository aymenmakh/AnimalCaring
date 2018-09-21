import { DataService } from './service/data.service';
import { BreedingDetailService } from './service/BreedingDetail.service';
import { UserService } from './service/user.servie';
import { BreedingRequestService } from './service/BreedingRequest.service';
import { RouterModule } from '@angular/router';
import { AllBreedingComponent } from './all-breeding/all-breeding.component';
import { BreedingOffer } from './model/BreedingOffer';
import { FormsModule } from '@angular/forms';

import { AnimalService } from './service/animal.service';
import { AnimalPhotoService } from './service/animalPhoto.service';
import { BreedingOfferService } from './service/BreedingOffer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { BreedingOfferComponent } from './breeding-offer/breeding-offer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreedingDetailComponent } from './breeding-detail/breeding-detail.component';
import { AgmCoreModule } from '@agm/core';
import { BreedingRequestComponent } from './breeding-request/breeding-request.component';
import { LoginComponent } from './login/login.component';
import { MemberOfferComponent } from './member-offer/member-offer.component';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {PopupModule} from 'ng2-opd-popup';
import { AddBreedingOfferComponent } from './add-breeding-offer/add-breeding-offer.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { DetailFinalComponent } from './detail-final/detail-final.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    BreedingOfferComponent,
    AllBreedingComponent,
    HeaderComponent,
    FooterComponent,
    BreedingDetailComponent,
    BreedingRequestComponent,
    LoginComponent,
    MemberOfferComponent,
    AddBreedingOfferComponent,
    ShowDetailsComponent,
    ManageRequestComponent,
    DetailFinalComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
     
      {path:'b',component:BreedingOfferComponent},
      {path:'all',component:AllBreedingComponent},
      {path:'detail',component:BreedingDetailComponent},
      {path:'request',component:BreedingRequestComponent},
      {path:'login',component:LoginComponent},
      {path:'MyBreedingOffers',component:MemberOfferComponent},
      {path:'addBreedingOffers',component:AddBreedingOfferComponent},
      {path:'showDetails',component:ShowDetailsComponent},
      {path:'manage',component:ManageRequestComponent},
      {path:'finale/:id1/:id2',component:DetailFinalComponent},
     
     // {path:'**',component:PostComponent},
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLEIAzYeRj-05gjYJRApNsdfR94gAMpgo'
    }) 
  
  
  ],
  providers: [  
    BreedingOfferService,
    AnimalPhotoService,
    AnimalService,
    BreedingRequestService,
    UserService,
    BreedingDetailService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],

  

  bootstrap: [AppComponent]
})
export class AppModule { }
