import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  isVisible: boolean = false;
  isAlertVisible: boolean = false;

  banners = [
    {
      img: '../../../../assets/img/banner/banner__1.png'
    },
    {
      img: '../../../../assets/img/banner/banner__2.png'
    },
    {
      img: '../../../../assets/img/banner/banner__3.png'
    },
    {
      img: '../../../../assets/img/banner/banner__4.png'
    }
  ];

  config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 8000
    },
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  };

  constructor() {
    SwiperCore.use([Autoplay, Pagination]);
  }

  showModal(): void {
    this.isVisible = !this.isVisible
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible
  }


  ngOnInit(): void { }
}
