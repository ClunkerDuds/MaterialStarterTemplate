import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Uncomment if using animations
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "./shared/shared.module";
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { FeaturesComponent } from './features/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FooterComponent,
    HeaderComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
