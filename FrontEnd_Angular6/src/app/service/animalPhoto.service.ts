import { Http } from '@angular/http';

import { Injectable } from '@angular/core';


@Injectable()
export class AnimalPhotoService  {

  constructor(private http: Http) { }


 getMember(ressource){
      return this.http.post('http://localhost:18080/seahawks-web/rest/animals/photos/membre',ressource).map(resp=>resp.json());
  }

  
  getAll(){
    return this.http.get('http://localhost:18080/seahawks-web/rest/animals/photos').map(resp=>resp.json());
}

}
