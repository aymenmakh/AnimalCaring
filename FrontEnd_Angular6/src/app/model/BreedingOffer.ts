import { Http } from '@angular/http';


import { Animal } from './animal';
export class BreedingOffer {
  
    constructor(

         public id? : number,
         public titre?: String,
         public description? : String,
         public date?: Date,
         public closed?: boolean,
         public located?: boolean,
         public animal?: Animal,
         public animalID?:number,
        ){
      
    }
    
}