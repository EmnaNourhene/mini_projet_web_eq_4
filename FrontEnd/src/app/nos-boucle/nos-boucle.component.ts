import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-boucle',
  templateUrl: './nos-boucle.component.html',
  styleUrls: ['./nos-boucle.component.scss']
})
export class NosBoucleComponent {
constructor(private route : Router) {}
gotoajout(){
  this.route.navigate(["/f-ajoutbague"])
}
}
