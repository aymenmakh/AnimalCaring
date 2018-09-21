import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class AnimalService  {

  constructor(private http: Http) { }


 getMember(ressource){
      return this.http.post('http://localhost:18080/seahawks-web/rest/animals/membre',ressource).map(resp=>resp.json());
  }


}
