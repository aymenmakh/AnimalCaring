
import { AnimalPhoto } from './../model/AnimalPhoto';
import { Animal } from './../model/animal';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { BreedingOffer } from './../model/BreedingOffer';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/Http';

@Component({
  selector: 'app-breeding-offer',
  templateUrl: './breeding-offer.component.html',
  styleUrls: ['./breeding-offer.component.css']
})
export class BreedingOfferComponent implements OnInit {
  
  breedingOffers : BreedingOffer[] = [];
  breedingOffer : BreedingOffer;
  animalPhotos : AnimalPhoto[] =[];

  

  constructor(private breedingOfferService:BreedingOfferService, private animalPhotoService:AnimalPhotoService) {
    // this.tabBarElement = document.querySelector('.tabbar');
    
  
    }

    ngOnInit(){
      var other = this;
      this.breedingOfferService.getDays(new Animal(1)).
      subscribe(resp =>{
        other.breedingOffers = (resp);
        this.getphoto();
      });
   }
    

 
 getphoto(){
  var photos =this;
   
  this.animalPhotoService.getAll().subscribe(rep=>{
    photos.animalPhotos = (rep)  
   });
   
  
 }

}
