import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzGridModule,
    NzModalModule,
    TranslateModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
