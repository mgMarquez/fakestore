import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/products/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path:'products/:productId',
    component: DetailsComponent,
  }
];
