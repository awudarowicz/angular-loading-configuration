import { Component, VERSION } from '@angular/core';
import { AppSampleService } from 'src/services/app-sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(appSampleService: AppSampleService) {

  }

  name = `Angular version = ${VERSION.full}`;
}
