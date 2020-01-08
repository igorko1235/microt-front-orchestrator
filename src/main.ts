import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as singleSpa from 'single-spa';

if (environment.production) {
  enableProdMode();
}

const registeredApplications = [
  'app1'
];

function registerLazyApplication(appName: string): void {
  singleSpa.registerApplication(
    appName,
    () => (window as any).System.import(appName),
    () => location.pathname.startsWith(`/${appName}`)
  );
}

registeredApplications.forEach(registerLazyApplication);
singleSpa.start();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
