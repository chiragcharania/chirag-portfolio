import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';

// If you have appConfig exported from app/app.config, you can import it and spread its providers.
// import { appConfig } from './app/app.config';

export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      // ...(appConfig?.providers ?? []), // optional if you have appConfig
      provideServerRendering(),
    ],
  });
}
