import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../model/product';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() product!: Product;
  @Output() addToCard = new EventEmitter<Product>();

  onAddToCard(): void {
    this.addToCard.emit(this.product);
  }
}
