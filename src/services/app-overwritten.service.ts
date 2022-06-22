import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppOverwrittenService {
  public constructor() {
    console.log('APP-OVERWRITTEN Service');
  }
}
