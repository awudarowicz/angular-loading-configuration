import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Configuration, CONFIGURATION, LibOverwrittenService, LibSampleService, MyLibModule } from 'my-lib';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { AppOverwrittenService } from 'src/services/app-overwritten.service';
import { AppSampleService } from 'src/services/app-sample.service';

import { AppComponent } from './app.component';

console.log('app module');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    ConfigurationModule
  ],
  providers: [
    {
      provide: AppSampleService,
      useClass: AppOverwrittenService
    },
    {
      provide: LibSampleService,
      useClass: LibOverwrittenService
    },
    {
      provide: CONFIGURATION,
      useFactory: (configurationService: ConfigurationService): Configuration => {
        console.log('configuration provider factory');
        return configurationService.getConfiguration();
      },
      deps: [ConfigurationService],
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
