import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productNo

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productNo = params.get('productId')
    })
  }

}
