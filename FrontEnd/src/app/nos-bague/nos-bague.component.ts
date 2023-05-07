import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-bague',
  templateUrl: './nos-bague.component.html',
  styleUrls: ['./nos-bague.component.scss']
})
export class NosBagueComponent {
  constructor(private route : Router) {}
gotoajout(){
  this.route.navigate(["/f-ajoutbague"])
}


}
