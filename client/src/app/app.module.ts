import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { TimeSlotModule } from './time-slot/time-slot.module';
import { UiModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';

const firebase = environment.firebase;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    UiModule,
    CoreModule,
    TimeSlotModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
