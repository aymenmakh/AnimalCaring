import { UserService } from './../service/user.servie';
import { Router } from '@angular/router';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { AnimalPhoto } from './../model/AnimalPhoto';
import { BreedingOffer } from './../model/BreedingOffer';
import { Animal } from './../model/animal';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { Component, OnInit,ElementRef } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-all-breeding',
  templateUrl: './all-breeding.component.html',
  styleUrls: ['./all-breeding.component.css']
})

export class AllBreedingComponent implements OnInit {
    
  breedingOffers : BreedingOffer[] = [];
  breedingOffers1 : BreedingOffer[] = [];
  breedingOffer : BreedingOffer;
  animalPhotos : AnimalPhoto[] =[];
  
  u : User = new User();

  
   Form = new FormGroup({
  country: new FormControl(),

}); 
  
  country : string;
  city : string;
  street : string;
  breed: string;
  spices: string;
  distance : number;
  constructor(private breedingOfferService:BreedingOfferService, private animalPhotoService:AnimalPhotoService, private router:Router,private elementRef:ElementRef,private _ServiceUser : UserService) {
   
  
    }

  ngOnInit(){
    let user = new User();
    var id = localStorage.getItem('currentUserId');
    console.log(id);
    user.id = +id;
    this._ServiceUser.getUserById(user).subscribe(response=>{
      this.u=response;
      console.log("current user is : "+ this.u.id +"--"+this.u.firstName +"--"+this.u.lastName +"--"+this.u.email)
    })



    var other = this;
    this.breedingOfferService.getAll().
    subscribe(resp =>{
      other.breedingOffers = (resp);
      for(let i of this.breedingOffers){
        i.animal.singleImage=i.animal.photo[0].photo;  
            }
      this.getphoto();
    });

   // var other = this;
    this.breedingOfferService.getAll().
    subscribe(resp =>{
      this.breedingOffers1 = (resp);
      this.getphoto();
    });

    console.log("country");

    
 }

 loadScript(){
  var s2 = document.createElement("script");
  s2.type = "text/javascript";
  s2.src = "../assets/js/range.js";
  this.elementRef.nativeElement.appendChild(s2);
  
  
}

 getphoto(){
  var photos =this;
   
  this.animalPhotoService.getAll().subscribe(rep=>{
    
    photos.animalPhotos = (rep)  
   });


}


filtreCountry(){
  var other = this;
 // if( (this.city == null) && (this.street ==null))
 // {
  this.breedingOfferService.country(this.country).
  subscribe(resp =>{
    other.breedingOffers = (resp);
    this.getphoto();
 });
//}
}

filtrecity(){
var other = this ;
  this.breedingOfferService.city(this.city).
  subscribe(resp =>{
    other.breedingOffers = (resp);
    this.getphoto();
  });
  }
  
filtrestreet()
{
var other = this ;
  this.breedingOfferService.street(this.street).
  subscribe(resp =>{
    other.breedingOffers = (resp);
    this.getphoto();
  });
  }

  filtrebreed()
  {
  var other = this ;
    this.breedingOfferService.breed(this.breed).
    subscribe(resp =>{
      other.breedingOffers = (resp);
      this.getphoto();
    });
    }

    filtrespices()
    {
    var other = this ;
      this.breedingOfferService.spices(this.spices).
      subscribe(resp =>{
        other.breedingOffers = (resp);
        this.getphoto();
      });
      }

 //if( (this.street == null) )
//{
  //this.country = null;


//if( (this.street != null))
//{


//}
change(value){
  this.country=value;
  console.log(this.country);
 
}

kilo(value){
  var other = this;
  this.distance = value;
  this.breedingOfferService.kilo(this.distance,new Animal(1)).
  subscribe(resp =>{
    other.breedingOffers = (resp);
    this.getphoto();
  });
  
  
}










}
