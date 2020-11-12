import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productNo

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // 从当前路由中获取参数
    this.route.paramMap.subscribe(params => {
      this.productNo = params.get('productId')
    })

    // 测试api call
    const options = {
      headers: {
        'Authorization': 'This is basic token'
      },
      params: {
        'scope': 'server',
        'grant_type': 'client_credentials'
      },
      responseType: 'json' as const //https://angular.cn/guide/http#requesting-a-typed-response
    }

    // 异步请求 先return再到subscribe
    this.http.get('url', options)
        .subscribe(data => {
          console.log(data)
        })

    this.testAsync()
  }

  async testAsync() {

    const options = {
      headers: {
        'Authorization': 'This is basic token'
      },
      params: {
        'scope': 'server',
        'grant_type': 'client_credentials'
      },
      responseType: 'json' as const //https://angular.cn/guide/http#requesting-a-typed-response
    }

    // Observable转换成Promise，等待response
    var res = await this.http.get('url', options).toPromise()
    console.log(res)
  }

}
