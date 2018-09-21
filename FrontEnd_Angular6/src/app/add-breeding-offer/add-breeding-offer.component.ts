import { Router } from '@angular/router';
import { AnimalService } from './../service/animal.service';
import { Member } from './../model/member';
import { Animal } from './../model/animal';
import { BreedingOfferService } from './../service/BreedingOffer.service';
import { BreedingOffer } from './../model/BreedingOffer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-breeding-offer',
  templateUrl: './add-breeding-offer.component.html',
  styleUrls: ['./add-breeding-offer.component.css']
})
export class AddBreedingOfferComponent implements OnInit {
  breedingOffer : BreedingOffer= new BreedingOffer(null,null,null,null,null,null,null);
  animal : Animal;
  animals : Animal[] = [];
  constructor( private breedingOfferService:BreedingOfferService,private animalService:AnimalService,
    private router: Router) { }

  ngOnInit() {
    var other = this;
    this.animalService.getMember(new Member(1)).
    subscribe(resp =>{
      other.animals = (resp)
    });
  }
  createPost(){  
 
    console.log(this.breedingOffer.animalID);
     this.breedingOfferService.add(this.breedingOffer).subscribe(
       resp => {
        this.router.navigate(['/MyBreedingOffers']);
             }
     );
    }

}
