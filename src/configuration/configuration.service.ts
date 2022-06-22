
import { Injectable } from '@angular/core';
import { Configuration } from 'my-lib';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configuration: Configuration | undefined;

  public constructor() {
  }

  public async loadConfiguration(): Promise<void> {
    console.log('loading configuration');

    return new Promise((resolve) => {
      this.configuration = {
        apiUrl: 'testurl'
      }

      resolve();
    });
  }
  public getConfiguration(): Configuration {
    if (this.configuration) {
      return this.configuration;
    } else throw new Error('Error');
  }
}
