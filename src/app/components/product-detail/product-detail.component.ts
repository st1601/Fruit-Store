import { Product, ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) {

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(
      (res: Product) => {
        this.product = res;
      },
      (err) => {}
    );
  }

}
