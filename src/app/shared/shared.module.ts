import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

//Add modules as needed - Add to import statement below. 
  // MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  // MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  // MatTabsModule, MatSidenavModule, MatTooltipModule, MatCheckboxModule, MatRadioModule, MatGridListModule,
  // MatProgressBarModule, MatSliderModule, MatChipsModule, MatRippleModule, MatExpansionModule

import { MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatListModule, MatMenuModule, MatProgressBarModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule
  ],
  declarations: []
})
export class SharedModule { }
