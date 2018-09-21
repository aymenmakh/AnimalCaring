import { BreedingRequest } from './BreedingRequest';
import { BreedingOffer } from './BreedingOffer';

export class BreedingDetails {
    
    constructor(

         public id? : number,
         public babiesNumber? : number,
         public statut? : String,
         public dateAction?: Date,
         public dateBreeding?: Date,
         public dateConfirmed?: Date,
        // public breedingRequest?: BreedingRequest,

           ){


    }
}