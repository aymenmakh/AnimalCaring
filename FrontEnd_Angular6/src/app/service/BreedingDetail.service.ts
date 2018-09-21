import { BreedingOfferComponent } from './../breeding-offer/breeding-offer.component';
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';


@Injectable()
export class BreedingDetailService  {

  constructor(private http: Http) { }


showDetail(ressource){
      return this.http.get('http://localhost:18080/seahawks-web/rest/breedingDetails/get'+"/"+ressource.id).map(resp=>resp.json());
  }



 edit(ressource){
    return this.http.put('http://localhost:18080/seahawks-web/rest/breedingDetails',ressource);




 }
  
 

}