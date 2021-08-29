import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatInputModule, MatFormFieldModule],
})
export class MaterialModule {}
