import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.less']
})
export class SaleComponent implements OnInit {

  isVisible: boolean = false;
  isAlertVisible: boolean = false;



  constructor() { }

  showModal(): void {
    this.isVisible = !this.isVisible
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible
  }

  ngOnInit(): void {
  }

}
