import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CollectionComponent } from './collection/collection.component';
import { NosCollierComponent } from './nos-collier/nos-collier.component';
import { NosBoucleComponent } from './nos-boucle/nos-boucle.component';
import { NosBagueComponent } from './nos-bague/nos-bague.component';
import { NosBraceletComponent } from './nos-bracelet/nos-bracelet.component';
import { NosMontreComponent } from './nos-montre/nos-montre.component';
import { NvComponent } from './nv/nv.component';
import { ContactComponent } from './contact/contact.component';
import { Bague1Component } from './bague1/bague1.component';
import { Boucle1Component } from './boucle1/boucle1.component';
import { Collier1Component } from './collier1/collier1.component';
import { FAjoutbagueComponent } from './f-ajoutbague/f-ajoutbague.component';
import { Montre1Component } from './montre1/montre1.component';
import { Bracelet1Component } from './bracelet1/bracelet1.component';
import { Nv1Component } from './nv1/nv1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FContactComponent } from './f-contact/f-contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    CollectionComponent,
    NosCollierComponent,
    NosBoucleComponent,
    NosBagueComponent,
    NosBraceletComponent,
    NosMontreComponent,
    NvComponent,
    ContactComponent,
    Bague1Component,
    Boucle1Component,
    Collier1Component,
    FAjoutbagueComponent,
    Montre1Component,
    Bracelet1Component,
    Nv1Component,
    NavbarComponent,
    FContactComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
