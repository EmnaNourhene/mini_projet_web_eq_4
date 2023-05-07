import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-montre',
  templateUrl: './nos-montre.component.html',
  styleUrls: ['./nos-montre.component.scss']
})
export class NosMontreComponent {
  constructor(private route : Router) {}
gotoajout(){
  this.route.navigate(["/f-ajoutbague"])
}

}
