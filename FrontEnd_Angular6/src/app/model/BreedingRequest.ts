import { BreedingOffer } from './BreedingOffer';
import { Http } from '@angular/http';


import { Animal } from './animal';
export class BreedingRequest {
  
    constructor(

         public id? : number,
         public description? : String,
         public status? : String,
         public animal?: number,
         public offer?: number
         
        ){
      
    }
    
}