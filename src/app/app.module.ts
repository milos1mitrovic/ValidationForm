import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FirstFormComponent } from './parent-validation-form/first-form/first-form.component';
import { ParentValidationFormComponent } from './parent-validation-form/parent-validation-form.component';
import { SecondFormComponent } from './parent-validation-form/second-form/second-form.component';
import { ThirdFormComponent } from './parent-validation-form/third-form/third-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentValidationFormComponent,
    FirstFormComponent,
    SecondFormComponent,
    ThirdFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
