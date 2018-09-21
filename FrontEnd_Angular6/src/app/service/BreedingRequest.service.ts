import { BreedingOfferComponent } from './../breeding-offer/breeding-offer.component';
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';


@Injectable()
export class BreedingRequestService  {

  constructor(private http: Http) { }


 addRequest(ressource){
      return this.http.post('http://localhost:18080/seahawks-web/rest/breedingRequest'+"/"+ressource.offer+"/"+ressource.animal+"/"+ressource.description,ressource);
  }
 getRequest(ressource){
    return this.http.get('http://localhost:18080/seahawks-web/rest/breedingRequest/member'+"/"+ressource.id,ressource).map(resp=>resp.json());;
}

getOffer(id){
    return this.http.get('http://localhost:18080/seahawks-web/rest/breedingRequest/offer'+"/"+id).map(resp=>resp.json());;
}

getBreedingRById(id){
    
      return this.http.get('http://localhost:18080/seahawks-web/rest/breedingRequest/br'+"/"+id).map(resp=>resp.json());
    
    }

    getofferByR(id){
        
          return this.http.get('http://localhost:18080/seahawks-web/rest/breedingRequest/offerbyR'+"/"+id).map(resp=>resp.json());
        
        }




  
 

}