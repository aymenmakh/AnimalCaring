import { AnimalPhoto } from './../model/AnimalPhoto';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { BreedingRequestService } from './../service/BreedingRequest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-final',
  templateUrl: './detail-final.component.html',
  styleUrls: ['./detail-final.component.css']
})
export class DetailFinalComponent implements OnInit {
  sub:Subscription;
  request : any ;
  offer : any ;
  breedingR : any;
  breedingO : any;
  days : number = 3;
  d:any
  animalPhotos : AnimalPhoto[] =[];
  constructor(private router: Router ,private route: ActivatedRoute,private breedingOfferService:BreedingOfferService,
  private breedingRequestService: BreedingRequestService,private animalPhotoService:AnimalPhotoService) {

     
   /*
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.request = +params['item1'] || 0;
      this.offer = +params['item2'] || 0;
    });
    */
   }
   

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.request  = params['id1'];
      this.offer  = params['id2'];


      this.breedingRequestService.getBreedingRById(this.request).subscribe(rep=>{
        this.breedingR = (rep)  
        this.getphoto();
       });

       this.breedingOfferService.getBreedingById(this.offer).subscribe(rep=>{
        this.breedingO = (rep)  
        this.getphoto();
        });
  
    });

    this.breedingOfferService.getDetails(this.breedingR).subscribe(rep=>{
         this.d = (rep);
         console.log(this.d.dateAction);
      });

/*
      this.breedingOfferService.days(this.d.dateAction).subscribe(r=>{
        this.days = (r) ;
        console.log(this.days);
        });*/


    
     
    
  }
  getphoto(){

    var photos =this;
    this.animalPhotoService.getAll().subscribe(rep=>{
      photos.animalPhotos = (rep)  
     });
   }


}
