import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Router, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import{FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { ListcomptesComponent } from './components/listcomptes/listcomptes.component';
import { ComptesformComponent } from './components/comptesform/comptesform.component';
import {CompteService} from './shared-services/compte.service';
const appRoutes :Routes=[
{ path: '',component:ListcomptesComponent},
{ path: 'op',component:ComptesformComponent}

] 
@NgModule({
  declarations: [
    AppComponent,
    ListcomptesComponent,
    ComptesformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
