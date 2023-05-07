import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-bracelet',
  templateUrl: './nos-bracelet.component.html',
  styleUrls: ['./nos-bracelet.component.scss']
})
export class NosBraceletComponent {
  constructor(private route : Router) {}
  gotoajout(){
    this.route.navigate(["/f-ajoutbague"])
  }
  
}
