import { InjectionToken } from '@angular/core';
import { Configuration } from '../models/configuration.model';

export const CONFIGURATION = new InjectionToken<Configuration>('CONFIGURATION');
