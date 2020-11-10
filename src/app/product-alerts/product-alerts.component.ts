import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product // 由父组件传递

  @Output() notify = new EventEmitter() // 事件处理由父组件绑定

  constructor() { }

  ngOnInit(): void {
  }
}

// 与父组件之间通信test