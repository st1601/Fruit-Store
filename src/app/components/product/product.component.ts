import { Product, ProductService } from './../../service/product.service';
import {CategoryService, Category} from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  constructor(private productService: ProductService,private categoryService: CategoryService) {}
  // private spinner: NgxSpinnerService
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res: Product[]) => {
      this.products = res;
    });
    this.categoryService.getAllCategory().subscribe((res: Category[]) => {
      this.categories = res;
    });

    /** spinner starts on init */
    // this.spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 1000);
  }
}
