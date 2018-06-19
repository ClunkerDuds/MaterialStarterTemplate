import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatExpansionModule } from "@angular/material/expansion";

//Uncomment if using animations
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "./shared/shared.module";
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { FeaturesComponent } from './features/features/features.component';
import { Features2Component } from './features2/features2.component';
import { Features3Component } from './features3/features3.component';
// import { MatDialog } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FooterComponent,
    HeaderComponent,
    FeaturesComponent,
    Features2Component,
    Features3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    //{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export class YourDialog {
  //constructor(public dialogRef: MatDialogRef<YourDialog>) {}

//  closeDialog () {
  //  this.dialogRef.close('Pizza!');
 // }
//}

