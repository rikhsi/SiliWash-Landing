import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  currentLanguage: string = 'RU'
  isVisible: boolean = false;
  isAlertVisible: boolean = false;

  constructor(public translate: TranslateService) { }

  autoScroll(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showModal(): void {
    this.isVisible = !this.isVisible
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible
  }

  language(data: string): void {
    this.currentLanguage = data.toUpperCase();
    this.translate.use(data);
  }

  ngOnInit(): void {
  }
}
