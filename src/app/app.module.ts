import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentValidationFormComponent } from './parent-validation-form/parent-validation-form.component';
import { FirstFormComponent } from './parent-validation-form/first-form/first-form.component';
import { SecondFormComponent } from './parent-validation-form/second-form/second-form.component';
import { ThirdFormComponent } from './parent-validation-form/third-form/third-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentValidationFormComponent,
    FirstFormComponent,
    SecondFormComponent,
    ThirdFormComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
