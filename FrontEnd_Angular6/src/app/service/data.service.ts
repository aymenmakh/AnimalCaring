
import { Http} from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  constructor(private http: Http, private url:string) { }


  getAll(){
      return this.http.get(this.url).map(resp=>resp.json());
  }

  add(ressource){
      return this.http.post(this.url+"/"+ressource.animalID+"/"+ressource.description+"/"+ressource.titre,ressource);
  }

  update(ressource){
    return this.http.put(this.url+ressource.id,ressource).map(resp=>resp.json());
  }

  delete(ressource){
    return this.http.delete(this.url+"/"+ressource.id);/*.map(resp=>resp.json());*/
  }

  getBreedingByDifferentSex(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/spice&sex',ressource).map(resp=>resp.json());
  }
  getBreedingByMember(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/membre',ressource).map(resp=>resp.json());
  }

  getRequestByOffer(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingRequest/offer',ressource).map(resp=>resp.json());
  }

  accept(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingRequest/accept'+"/"+ressource.id,ressource);
  }

 decline(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingRequest/decline'+"/"+ressource.id,ressource);
  }

  nbBreeding(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/numberBreeding'+"/"+ressource.id,ressource).map(resp=>resp.json());
  }

  nbBreedingS(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/numberBreedingSucces'+"/"+ressource.id,ressource).map(resp=>resp.json());
  }


  nbBreedingF(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/numberBreedingFailed'+"/"+ressource.id,ressource).map(resp=>resp.json());
  }

  chanceBreeding(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/chance'+"/"+ressource.id,ressource).map(resp=>resp.json());
  }

  getDetails(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingDetails/get'+"/"+ressource.id,ressource).map(resp=>resp.json());
  }


  getDays(ressource)
  {
    return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/days',ressource).map(resp=>resp.json());
  }


  city(city){
    return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/aymen?city='+city).map(resp=>resp.json());
}

country(country){
  return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/aymen?country='+country).map(resp=>resp.json());
}

street(street){
  return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/aymen?street='+street).map(resp=>resp.json());
}


breed(breed){
  return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/aymen?breed='+breed).map(resp=>resp.json());
}


spices(spices){
  return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/aymen?spices='+spices).map(resp=>resp.json());
}

kilo(dist,animal){

  return this.http.post('http://localhost:18080/seahawks-web/rest/breedingOffer/distance'+"/"+dist,animal).map(resp=>resp.json());

}

getBreedingById(id){
  
    return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/b'+"/"+id).map(resp=>resp.json());
  
  }

  distance(x1,y1,x2,y2)
  {
    return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/distance2'+"/"+x1+"/"+y1+"/"+x2+"/"+y2).map(resp=>resp.json());
  }

  days(date)
  {
    return this.http.get('http://localhost:18080/seahawks-web/rest/breedingOffer/days'+"/"+date).map(resp=>resp.json());
  }







  
  






  
}
