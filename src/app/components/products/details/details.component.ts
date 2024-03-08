import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { Rating } from '../../../model/rating';
import { ProductsService } from '../../../api/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  // Se guarda el valor del parametro con nombre productId de una ruta.
  @Input() productId!:number;
  product!: Product;
  
  constructor(private productsSrv: ProductsService) { }
  ngOnInit(): void {
    this.productsSrv.getProduct(this.productId).subscribe(product => {this.product = product;})
  }
}
