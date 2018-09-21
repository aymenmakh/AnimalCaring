import { UserService } from './../service/user.servie';
import { User } from './../model/user';
import { BreedingOffer } from './../model/BreedingOffer';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { BreedingRequest } from './../model/BreedingRequest';
import { BreedingRequestService } from './../service/BreedingRequest.service';
import { AnimalPhoto } from './../model/AnimalPhoto';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  sub:Subscription;
  lat: number ;
  lng: number ;
  id: number;
  u : User= new User();

  distance : number;
  b :any;
  animalPhotos : AnimalPhoto[] =[];
  breedingRequests : any;
  constructor(private route: ActivatedRoute,
    private router: Router,private breedingRequestService: BreedingRequestService, private animalPhotoService:AnimalPhotoService,
    private breedingOfferService:BreedingOfferService,private _ServiceUser : UserService) { }

  ngOnInit() {
     
    let user = new User();
    var id = localStorage.getItem('currentUserId');
    console.log(id);
    user.id = +id;
    this._ServiceUser.getUserById(user).subscribe(response=>{
      this.u=response;
      console.log("current user is : "+ this.u.id +"--"+this.u.firstName +"--"+this.u.lastName +"--"+this.u.email)
    })

    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.id = +params['item'] || 0;
    });
    this.breedingOfferService.getBreedingById(this.id).
    subscribe(resp =>{
      other.b = (resp);
      this.breedingOfferService.distance(this.u.address.x,this.u.address.y,this.b.animal.owner.address.x,this.b.animal.owner.address.y)
      .subscribe(
        res=> {
    this.distance = (res) ;
   
    });
      this.getphoto();
      this.lat=(resp.animal.owner.address.x);
      this.lng=(resp.animal.owner.address.y);
     
 
    });

   

    var other = this;
    this.breedingRequestService.getOffer(this.id).
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

}
