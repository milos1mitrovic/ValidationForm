import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule],
})
export class MaterialModule {}
