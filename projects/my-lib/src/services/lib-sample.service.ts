import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibSampleService {
  public constructor() {
    console.log('LIB-SAMPLE Service');
  }
}
