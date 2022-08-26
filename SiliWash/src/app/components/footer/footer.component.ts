import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  isVisible: boolean = false;
  isAlertVisible: boolean = false;

  constructor() { }

  autoScroll(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showModal(): void {
    this.isVisible = !this.isVisible
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible
  }

  ngOnInit(): void {
  }
}
