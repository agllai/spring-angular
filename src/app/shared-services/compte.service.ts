import { Injectable } from '@angular/core';
import {Http , Response , Headers , RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Compte} from '../compte';

@Injectable()
export class CompteService {
  private baseurl:string = 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private compte = new Compte();
  constructor(private _http:Http) { }

  getComptes(){
    return this._http.get(this.baseurl+'/comptes',this.options).map((response:Response)=> response.json()).catch(this.errorHandler);
  }
  getCompte(code_compte:string){
    return this._http.get(this.baseurl+'/compte/'+code_compte,this.options).map((response:Response)=> response.json()).catch(this.errorHandler);
  }
  deleteCompte(code_compte:string){
    return this._http.delete(this.baseurl+'/compte/'+code_compte,this.options).map((response:Response)=> response.json()).catch(this.errorHandler);
  }
  createCompte(compte:Compte){
    return this._http.post(this.baseurl+'/compte',JSON.stringify(compte)  ,this.options).map((response:Response)=> response.json()).catch(this.errorHandler);
  }
  updateCompte(compte:Compte){
    return this._http.put(this.baseurl+'/compte' ,JSON.stringify(compte) ,this.options).map((response:Response)=> response.json()).catch(this.errorHandler);
  }
  errorHandler(error:Response){
return Observable.throw(error||"SERVER ERROR");
  }

  setter(compte:Compte){
    this.compte =compte;
  }

 getter(){
   return this.compte;
 }
}
