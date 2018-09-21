import { DataService } from './data.service';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class BreedingOfferService extends DataService {

  constructor(http :Http) { 
    super(http,'http://localhost:18080/seahawks-web/rest/breedingOffer');
  }

 

}
