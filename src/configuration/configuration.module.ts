import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ConfigurationService } from './configuration.service';

export function loadConfiguration(configurationService: ConfigurationService) {
  return (): Promise<void> => configurationService.loadConfiguration();
}

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    { 
      provide: APP_INITIALIZER,
      useFactory: loadConfiguration,
      deps: [ConfigurationService],
      multi: true,
    },
  ],
})
export class ConfigurationModule {}
