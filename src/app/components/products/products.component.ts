import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Product } from '../../model/product';
import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [CardComponent],
})
export class ProductsComponent {
  products: Product[] = [];
  constructor(private productsSrv: ProductsService) {}

  ngOnInit() {
    this.productsSrv.getProducts().subscribe(products => this.products = products);
  }
}
