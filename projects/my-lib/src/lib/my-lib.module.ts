import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';


console.log('lib module');
@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
