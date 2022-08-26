import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { BannerComponent } from './banner/banner.component';
import { HelpComponent } from './help/help.component';
import { FreeComponent } from './free/free.component';
import { SaleComponent } from './sale/sale.component';
import { FormComponent } from './form/form.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SwiperModule } from 'swiper/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from '../modal/modal.module';
import { AlertModule } from '../alert/alert.module';
import { NgxMaskModule } from 'ngx-mask';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    HelpComponent,
    FreeComponent,
    SaleComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    TranslateModule,
    SwiperModule,
    ModalModule,
    AlertModule,
    NgxMaskModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule { }
