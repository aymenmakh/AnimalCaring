import { BreedingOfferService } from './../service/BreedingOffer.service';
import { BreedingOffer } from './../model/BreedingOffer';
import { AnimalPhoto } from './../model/AnimalPhoto';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { Animal } from './../model/animal';
import { BreedingRequest } from './../model/BreedingRequest';
import { Member } from './../model/member';
import { BreedingRequestService } from './../service/BreedingRequest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-breeding-request',
  templateUrl: './breeding-request.component.html',
  styleUrls: ['./breeding-request.component.css']
})
export class BreedingRequestComponent implements OnInit {
  sub:Subscription;
  id:number;
  member : Member;
  animals : Animal[] = [];
  breedingRequests : BreedingRequest[] = [];
  breedingOffers : BreedingOffer[] = [];
  nb : any[]=[];
  
   nbS : any[]=[];
   o : number;
  
   nbF : any[]=[];
  
   chance : any[]=[];
  animalPhotos : AnimalPhoto[] =[];
  constructor(private breedingOfferService:BreedingOfferService,private route: ActivatedRoute,
    private router: Router, private breedingRequestService: BreedingRequestService,private ref:ChangeDetectorRef,
    private animalPhotoService:AnimalPhotoService) {
     
      var other = this;
      this.breedingRequestService.getRequest(new Member(1)).
      subscribe(resp =>{
        
       other.breedingRequests = (resp);
     
          console.log(resp);
        
        });
      
      }
    getphoto(){
      var photos =this;
      this.animalPhotoService.getAll().subscribe(rep=>{
        photos.animalPhotos = (rep)  
       });
    }
  ngOnInit() {  
    var other  =this;
    this.breedingOfferService.getBreedingByDifferentSex(new Animal(1)).
    subscribe(resp =>{
      other.breedingOffers = (resp);
      this.getphoto();
    });

   }

   
   offer(id){
    this.breedingRequestService.getofferByR(id).
    subscribe(res =>{
     this.o= res.id;
  
      });
      this.router.navigate(['finale',id,this.o ])
 }



}
