import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactUsService {
  private httpClient = inject(HttpClient);

  async sendNumber(formData: FormData) {
    await firstValueFrom(
      this.httpClient.post(
        'https://script.google.com/macros/s/AKfycbyerY3elZhq4HrI4ES7bMgOmCnVH4Id0n3g4f43od9TEJwbeA-OlbZ5yDzuhG9s7ExU/exec', formData
      )
    )
  }
}
