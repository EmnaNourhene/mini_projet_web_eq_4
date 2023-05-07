import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetproductService } from '../getproduct.service';

@Component({
  selector: 'app-nos-collier',
  templateUrl: './nos-collier.component.html',
  styleUrls: ['./nos-collier.component.scss']
})
export class NosCollierComponent implements OnInit {
  constructor(private route : Router , private products:GetproductService) {}
  prod: any = [];
  ngOnInit(): void {
    this.products.getBlogs().subscribe(
      (value: Object) => {
        const res = value as any;
        this.prod = res;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  gotoajout(){
    this.route.navigate(["/f-ajoutbague"])
  }
}
