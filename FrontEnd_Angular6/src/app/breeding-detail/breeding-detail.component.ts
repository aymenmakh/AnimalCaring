import { UserService } from './../service/user.servie';
import { User } from './../model/user';
import { BreedingRequestService } from './../service/BreedingRequest.service';
import { BreedingRequest } from './../model/BreedingRequest';
import { Member } from './../model/member';
import { AnimalService } from './../service/animal.service';
import { Animal } from './../model/animal';
import { address } from './../model/address';
import { AnimalPhoto } from './../model/AnimalPhoto';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { BreedingOffer } from './../model/BreedingOffer';
import { Component, OnInit,ElementRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-breeding-detail',
  templateUrl: './breeding-detail.component.html',
  styleUrls: ['./breeding-detail.component.css']
})
export class BreedingDetailComponent implements OnInit {
  lat: number ;
  lng: number ;
  id : number ;
  animalPhotos : AnimalPhoto[] =[];
  b :any;
  br : BreedingRequest = new BreedingRequest(null,null,null,null,null);
  sub:Subscription;
  animal : Animal;
  description : String;
  ida : number;
  animals : Animal[] = [];
  nb :number ;
  u : User= new User();
   nbS : number;
   distance : number;
   nbF : any[]=[];
  
   chance : any[]=[];
  constructor(private elementRef: ElementRef,private route: ActivatedRoute,
    private router: Router,private breedingOfferService:BreedingOfferService, private animalPhotoService:AnimalPhotoService,
  
    private animalService:AnimalService,private breedingRequestService:BreedingRequestService,private _ServiceUser : UserService) { }

  ngOnInit() {
      
    let user = new User();
    var id = localStorage.getItem('currentUserId');
    console.log(id);
    user.id = +id;
    this._ServiceUser.getUserById(user).subscribe(response=>{
      this.u=response;
      
      console.log("current user is : "+ this.u.id +"--"+this.u.firstName +"--"+this.u.lastName +"--"+this.u.email);
      var other2 = this;
      this.animalService.getMember(this.u).
      subscribe(resp =>{
        this.animals = (resp)
      });
     
     
    });



    var other = this;
    var other2 = this;
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "../assets/js/progress.js";
    this.elementRef.nativeElement.appendChild(s2);


 

    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.id = +params['item'] || 0;
    });

  
   this.breedingOfferService.getBreedingById(this.id).
   subscribe(resp =>{
    this.b = (resp);
     this.lat=(resp.animal.owner.address.x);
     this.lng=(resp.animal.owner.address.y);
     this.breedingOfferService.distance(this.u.address.x,this.u.address.y,this.b.animal.owner.address.x,this.b.animal.owner.address.y)
     .subscribe(
       res=> {
   this.distance = (res) ;  
   });
     this.getphoto();

     this.breedingOfferService.nbBreeding(this.b.animal).subscribe(data=>{
      // console.log(data);
     this.nb = (data)
  });



  this.breedingOfferService.nbBreedingS(this.b.animal).subscribe(daa=>{
    this.nbS = (daa)
    });

    
  


   });
  
  
 
  }


   getphoto(){
    var photos =this;
     
    this.animalPhotoService.getAll().subscribe(rep=>{
      photos.animalPhotos = (rep)  
     });
  
  
  }

  createPost(id){   
       this.br.offer = this.b.id;
       this.br.description = this.description;
        this.breedingRequestService.addRequest(this.br).subscribe(
       resp => {
         console.log("add request");
         this.router.navigate(['/request']);
       }
     );
  
    // id = this.br.id;
    
    }


  
   

  
  




}
