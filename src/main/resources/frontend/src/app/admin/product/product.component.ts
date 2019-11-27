import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild('.a', {static: false}) a: number;
  @ViewChild('.b', {static: false}) b: number;
  price1: number;
  price2: number;
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

  getPrice(price1,price2) {
    this.http.get<Product[]>(`api/product/price?price1=${price1}&price2=${price2}`).subscribe(data =>{
      data.forEach(data => {
        data.imgUrl = atob(data.imgUrl);
      });
      this.collection = data;
      console.log(this.collection);
    })
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
