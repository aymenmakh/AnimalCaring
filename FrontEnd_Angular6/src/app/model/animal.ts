import { AnimalPhoto } from './AnimalPhoto';
import { User } from './user';
export class Animal {
    
    constructor(

         public id? : number,
         public status?: string,
         public singleImage? :string,
         public photo? : AnimalPhoto[]

      //   public user?: User,

        ){

         }
         


    
}