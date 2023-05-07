import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';
import { NosCollierComponent } from './nos-collier/nos-collier.component';
import { NosBraceletComponent } from './nos-bracelet/nos-bracelet.component';
import { NosMontreComponent } from './nos-montre/nos-montre.component';
import { NosBoucleComponent } from './nos-boucle/nos-boucle.component';
import { NvComponent } from './nv/nv.component';
import { NosBagueComponent } from './nos-bague/nos-bague.component';
import { Montre1Component } from './montre1/montre1.component';
import { Bague1Component } from './bague1/bague1.component';
import { Bracelet1Component } from './bracelet1/bracelet1.component';
import { Collier1Component } from './collier1/collier1.component';
import { Boucle1Component } from './boucle1/boucle1.component';
import { Nv1Component } from './nv1/nv1.component';
import { FAjoutbagueComponent } from './f-ajoutbague/f-ajoutbague.component';
import { FContactComponent } from './f-contact/f-contact.component';


const routes: Routes = [
  { path : 'acceuil' , component : AcceuilComponent
  } ,
  { path : 'collection' , component : CollectionComponent} ,
  { path : 'contact' , component : ContactComponent} ,
  { path : 'nos-collier' , component : NosCollierComponent} ,
  { path : 'nos-bracelet' , component : NosBraceletComponent} , 
  { path : 'nos-montre' , component : NosMontreComponent} ,
  { path : 'nos-boucle' , component : NosBoucleComponent} ,
  { path : 'nos-bague' , component : NosBagueComponent} ,
  { path : 'nv' , component : NvComponent} , 
{ path : 'montre1' , component : Montre1Component} , 
{ path : 'bague1' , component : Bague1Component} ,
{ path : 'bracelet1' , component : Bracelet1Component} ,
{ path : 'collier1' , component : Collier1Component} , 
{ path : 'boucle1' , component : Boucle1Component} ,
{ path : 'nv1' , component : Nv1Component} , 
{ path : 'f-ajoutbague' , component : FAjoutbagueComponent} ,
    { path : 'f-contact' , component : FContactComponent} ,
    
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
