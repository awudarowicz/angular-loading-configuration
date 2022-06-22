import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSampleService {
  public constructor() {
    console.log('APP-SAMPLE Service');
  }
}
