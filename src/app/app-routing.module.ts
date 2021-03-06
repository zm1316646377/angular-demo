import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

const routes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: 'products/:productId', component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],  // https://github.com/angular/angular/pull/38698
  exports: [RouterModule]
})
export class AppRoutingModule { }
