import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessegeComponent } from './messege/messege.component';
import { LinczorPipe } from './linczor.pipe';
import { YoutubeframeComponent } from './youtubeframe/youtubeframe.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WytnijPipe } from './wytnij.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    MessegeComponent,
    LinczorPipe,
    YoutubeframeComponent,
    SidebarComponent,
    WytnijPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
