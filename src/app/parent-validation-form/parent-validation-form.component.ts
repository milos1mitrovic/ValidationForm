import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-validation-form',
  templateUrl: './parent-validation-form.component.html',
  styleUrls: ['./parent-validation-form.component.css'],
})
export class ParentValidationFormComponent implements OnInit {
  isFirstFormValid: boolean = false;
  showForm = false;

  constructor() {}

  ngOnInit(): void {}

  firstValidationContinue(value: boolean) {
    this.isFirstFormValid = value;
  }
}
