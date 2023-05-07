import { Injectable } from '@angular/core';


import { HttpClient , HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetproductService {
  constructor(private http: HttpClient) {}
  getBlogs() {
    return this.http.get('http://localhost/projet1/product.php');
  }

}
