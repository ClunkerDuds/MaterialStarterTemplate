import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";

//Uncomment if using animations
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { OverviewComponent } from "./overview/overview/overview.component";
import { FooterComponent } from "./footer/footer/footer.component";
import { HeaderComponent } from "./header/header/header.component";
import { FeaturesComponent } from "./features/features/features.component";
import { Features2Component } from "./features2/features2.component";
import { Features3Component } from "./features3/features3.component";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FooterComponent,
    HeaderComponent,
    FeaturesComponent,
    Features2Component,
    Features3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    //{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

//}
