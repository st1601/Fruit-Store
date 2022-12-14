import { Product, ProductService } from './../../service/product.service';
import { CategoryService, Category } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
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
  shot = (product: Product[]): Product[] => {
    return product.slice(0, 3);
  };
}
