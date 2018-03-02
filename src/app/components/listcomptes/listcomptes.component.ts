import { Component, OnInit } from '@angular/core';
import {CompteService} from '../../shared-services/compte.service';
import {Compte} from '../../compte';
import{Router}  from '@angular/router';
@Component({
  selector: 'app-listcomptes',
  templateUrl: './listcomptes.component.html',
  styleUrls: ['./listcomptes.component.css']
})
export class ListcomptesComponent implements OnInit {
  comptes :Compte[];
  
  constructor(private _compteService: CompteService, private _router:Router) { }

  ngOnInit() {

    this._compteService.getComptes().subscribe((compte)=>{
      console.log(compte);
      this.comptes=compte;
    },
    (error)=>{console.log(error);
    
    })
  
  }
  deleteCompte(compte){
    this._compteService.deleteCompte(compte.codeCompte).subscribe((data)=>{
        this.comptes.splice(this.comptes.indexOf(compte),1);
    },(error)=>{
      console.log(error);
    });
  }

   updateCompte(compte){  
     this._compteService.setter(compte);
     this._router.navigate(['/op']);


   }
   newCompte(){
   let compte = new Compte();
    this._compteService.setter(compte);
     this._router.navigate(['/op']);
   
   }

}
