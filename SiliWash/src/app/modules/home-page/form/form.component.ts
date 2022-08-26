import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  newOrder!: FormGroup;
  isAlertVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.newOrder = this.fb.group({
      clientName: [null, [Validators.required, Validators.minLength(3)]],
      clientNumber: [null, [Validators.required]]
    });
  }

  submitForm(e: Event): void {
    if (this.newOrder.valid) {
      emailjs.sendForm('service_fc6ryp3', 'template_p0v414j', e.target as HTMLFormElement, '2dBCb8RzDHxbz-KUD');
      this.isAlertShow();
      this.newOrder.reset();
    } else {
      Object.values(this.newOrder.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  isAlertShow(): void {
    this.isAlertVisible = !this.isAlertVisible
  }
  ngOnInit(): void {
  }

}
