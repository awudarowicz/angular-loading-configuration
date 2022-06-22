import { Component, OnInit } from '@angular/core';
import { LibSampleService } from './../services/lib-sample.service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>my lib works</p>
  `
})
export class MyLibComponent implements OnInit {

  constructor(libSampleService: LibSampleService) {
      console.log('my lib component');
  }

  ngOnInit(): void {
  }

}
