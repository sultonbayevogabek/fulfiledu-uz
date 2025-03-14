import { Component, inject, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '@shared/components/icon/icon.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { ContactUsService } from './contact-us.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'contact-us',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    NgTemplateOutlet,
    IconComponent,
    CustomButtonComponent,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  templateUrl: './contact-us.component.html',
  providers: [
    provideNgxMask(),
  ]
})

export class ContactUsComponent {
  showAlert = signal(false)
  contactUsForm: FormGroup = new FormGroup({
    phone: new FormControl('+998 ', [Validators.required]),
  })

  private contactUsService = inject(ContactUsService);

  async sendNumber() {
    if (this.contactUsForm.invalid && this.contactUsForm.disabled) {
      return;
    }

    this.contactUsForm.disable();

    const formData = new FormData();
    formData.append('Telefon raqami', '+998 ' + this.contactUsForm.get('phone').value);
    formData.append('Raqamni qoldirgan vaqti', new Date().toLocaleString());

    await this.contactUsService.sendNumber(formData);
    this.contactUsForm.enable();
    this.contactUsForm.get('phone').setValue('+998 ');
    this.showAlert.set(true);

    await firstValueFrom(timer(5000));
    this.showAlert.set(false);
  }
}
