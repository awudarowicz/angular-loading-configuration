import { Inject, Injectable } from '@angular/core';
import { Configuration } from '../models/configuration.model';
import { CONFIGURATION } from '../tokens/configuration.token';

@Injectable({
  providedIn: 'root',
})
export class LibOverwrittenService {
  public constructor(@Inject(CONFIGURATION) private configuration: Configuration) {
    console.log('LIB-OVERWRITTEN Service');
    console.log(this.configuration);
  }
}
