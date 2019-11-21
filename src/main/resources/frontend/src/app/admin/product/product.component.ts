import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product[] = [];
  page: number;
  constructor(private http: HttpClient) { }
  p: number = 1;
  collection: any[] ;
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.http.get<Product[]>('/api/product/all').subscribe(data => {
      this.product = data;
      this.product.forEach(data => {
        data.imgUrl = atob(data.imgUrl);
      });
      this.collection = data;
    });
  }
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  category: string;
  type: string;
}
