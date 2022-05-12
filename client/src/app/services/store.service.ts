import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"
import { environment} from '../../environments/environment';
import { Observable,of,Subject  } from 'rxjs';
       
@Injectable({
  providedIn: 'root'
})
export class StoreService {
         
  constructor(public http:HttpClient,public router:Router) { }

//=====================================================================================================================================================================================================================================================================>

  public GetShape(Type:any){
  
    console.log(Type);
    
    return this.http.get(environment.api_url + '/getshape/'+Type)

  }

//==============================================================================================================================================>

}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!