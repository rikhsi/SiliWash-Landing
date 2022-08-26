import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    TranslateModule,
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
