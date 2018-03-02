import { Component, OnInit } from '@angular/core';
import { Compte } from '../../compte';
import { CompteService } from '../../shared-services/compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptesform',
  templateUrl: './comptesform.component.html',
  styleUrls: ['./comptesform.component.css']
})
export class ComptesformComponent implements OnInit {
    compte : Compte;
  constructor(private _compteService:CompteService,private _rotuer:Router) { }
  ngOnInit() {
    this.compte=this._compteService.getter();
  }

  processForm(){
    if(this.compte.codeCompte==undefined){
       this._compteService.createCompte(this.compte).subscribe((compte)=>{
         console.log(compte);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._compteService.updateCompte(this.compte).subscribe((compte)=>{
         console.log(compte);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }
}
