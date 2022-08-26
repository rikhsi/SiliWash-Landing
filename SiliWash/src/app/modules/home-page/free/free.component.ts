import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.less']
})
export class FreeComponent implements OnInit {
  isVisible: boolean = false;
  isAlertVisible: boolean = false;

  lists = [
    {
      text: 'free.info.first'
    },
    {
      text: 'free.info.second'
    },
    {
      text: 'free.info.third'
    }
  ];

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
