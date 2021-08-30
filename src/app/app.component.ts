import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstFormComponent } from './parent-validation-form/first-form/first-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'validation-form';
  showForm = false;

  showRegisterForm() {
    // this.showForm = true;
    this.dialog.open(FirstFormComponent);
    // console.log(dialogRef);
  }

  constructor(public dialog: MatDialog) {}
}
