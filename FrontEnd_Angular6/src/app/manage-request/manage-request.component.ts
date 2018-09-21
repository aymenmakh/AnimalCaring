import { UserService } from './../service/user.servie';
import { User } from './../model/user';
import { BreedingDetailService } from './../service/BreedingDetail.service';
import { BreedingDetails } from './../model/BreedingDetail';
import { AnimalPhoto } from './../model/AnimalPhoto';
import { BreedingRequest } from './../model/BreedingRequest';
import { Subscription } from 'rxjs/Rx';
import { BreedingRequestService } from './../service/BreedingRequest.service';
import { AnimalPhotoService } from './../service/animalPhoto.service';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { AnimalService } from './../service/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from '@angular/forms';

@Component({
  selector: 'app-manage-request',
  templateUrl: './manage-request.component.html',
  styleUrls: ['./manage-request.component.css']
})
export class ManageRequestComponent implements OnInit {
  lat: number ;
  lng: number ;
  sub:Subscription;
  animalPhotos : AnimalPhoto[] =[];
  id : number ;
  u : User= new User();
  br :any;
  bd : BreedingDetails;
  date :any;
  o : any;
  test : boolean;
  modifDetail:FormGroup;
  distance : number;
  constructor(private elementRef: ElementRef,private route: ActivatedRoute,
    private router: Router,private breedingOfferService:BreedingOfferService, private animalPhotoService:AnimalPhotoService,
  
    private animalService:AnimalService,private breedingRequestService:BreedingRequestService,
    private breedingDetailService:BreedingDetailService,
    private formBuilder:FormBuilder,private _ServiceUser : UserService) {

   let user = new User();
   var id = localStorage.getItem('currentUserId');
   console.log(id);
   user.id = +id;
   this._ServiceUser.getUserById(user).subscribe(response=>{
     this.u=response;
     console.log("current user is : "+ this.u.id +"--"+this.u.firstName +"--"+this.u.lastName +"--"+this.u.email);
   });
     }

  ngOnInit() {


    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.id = +params['item'] || 0;
      console.log(this.id);
    });




    this.breedingRequestService.getBreedingRById(this.id).
    subscribe(resp =>{
     this.br = (resp); 
     this.lat=(resp.animal.owner.address.x);
     this.lng=(resp.animal.owner.address.y);
     console.log(this.br.id);
      this.getphoto();
      this.breedingOfferService.distance(this.u.address.x,this.u.address.y,this.br.animal.owner.address.x,this.br.animal.owner.address.y)
      .subscribe(
        res=> {
    this.distance = (res) ;
    console.log(this.distance);
    });
    });
    




    this.modifDetail=this.formBuilder.group({
      startDate:['',Validators.required],
     }); 


    

   }
  getphoto(){
    var photos =this;   
    this.animalPhotoService.getAll().subscribe(rep=>{
      photos.animalPhotos = (rep)  
     });
  }
  decline(ressource){
    this.breedingOfferService.decline(ressource).subscribe(resp =>{
      });
  }
  accept(ressource){
    this.test = true;
    var z = this;
         this.breedingOfferService.accept(ressource).subscribe(resp =>{
         
          this.breedingDetailService.showDetail(ressource).subscribe(detail =>{
            z.bd = (detail);
            console.log(z.bd.dateConfirmed);
            
            //console.log( this.modifDetail.value.startDate);
            
           z.bd.dateAction = this.modifDetail.value.startDate;
            this.breedingDetailService.edit(z.bd).subscribe(detail =>{    
            });       
          });
        });
        this.breedingRequestService.getofferByR(this.br.id).
        subscribe(res =>{
         this.o= res.id;
      
          });
       
       }

       go(){
        this.breedingRequestService.getofferByR(this.br.id).
        subscribe(res =>{
         this.o= res.id;
      
          });
       
        this.router.navigate(['finale',this.br.id,this.o])   ; 
       }

       /*
       dateLessThan(from: string, to: string) {
        return (group: FormGroup): {[key: string]: any} => {
        let f = group.controls[from];
        let t = group.controls[to];
        if (f.value > t.value) {
          return {
            dates: 'Start date should be less than end date'
          };
        }
        return {};
        }     
*/

}