import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv',
  templateUrl: './nv.component.html',
  styleUrls: ['./nv.component.scss']
})
export class NvComponent {
  constructor(private route : Router) {}
  gotoajout(){
    this.route.navigate(["/f-ajoutbague"])
  }
}
