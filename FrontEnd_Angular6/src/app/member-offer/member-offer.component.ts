import { UserService } from './../service/user.servie';
import { User } from './../model/user';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { AnimalPhoto } from './../model/AnimalPhoto';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { BreedingOffer } from './../model/BreedingOffer';
import { AnimalService } from './../service/animal.service';
import { Member } from './../model/member';


import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-member-offer',
  templateUrl: './member-offer.component.html',
  styleUrls: ['./member-offer.component.css']
})


export class MemberOfferComponent implements OnInit {
 
  breedingOffers : BreedingOffer[] = [];
  breedingOffer : BreedingOffer;
  animalPhotos : AnimalPhoto[] =[];
  u : any;
  
  constructor( private breedingOfferService:BreedingOfferService, private animalPhotoService:AnimalPhotoService,
    private _ServiceUser : UserService) { 
      let user = new User();
      var id = localStorage.getItem('currentUserId');
      console.log(id);
      user.id = +id;
      this._ServiceUser.getUserById(user).subscribe(response=>{
        this.u=response;
        console.log("current user is : "+ this.u.id +"--"+this.u.firstName +"--"+this.u.lastName +"--"+this.u.email);


        var other = this;
        this.breedingOfferService.getBreedingByMember(this.u).
        subscribe(resp =>{
          other.breedingOffers = (resp)
        });
      })
  
    }

  ngOnInit() {
   
    
    this.getphoto();
  }

  deleteItem(item)
  {
  
      this.breedingOfferService.delete(item)
      
      .subscribe(resp=> {
        this.breedingOffers.splice(this.breedingOffers.indexOf(item), 1);
       
      });
  }





  
  getphoto(){
    var photos =this;
     
    this.animalPhotoService.getAll().subscribe(rep=>{
      photos.animalPhotos = (rep)  
     });
  
  
  }

    

    
  


  
  
  
  

 

}
