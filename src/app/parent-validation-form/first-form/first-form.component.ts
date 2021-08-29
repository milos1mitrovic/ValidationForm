import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// export interface DialogData {}

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css'],
})
export class FirstFormComponent implements OnInit {
  showForm: boolean = false;
  signUpForm: FormGroup;
  @Output() continueClicked = new EventEmitter<boolean>();

  submitted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPass: new FormControl(null, Validators.required),
    });
  }

  onSubmit(isValid: boolean) {
    this.submitted = true;
    if (this.signUpForm.valid) {
      console.log('form submitted');
      // this.signUpForm.reset();
      isValid = this.signUpForm.valid;
    } else {
      this.validateAllFormFields(this.signUpForm); //{7}
      isValid = this.signUpForm.valid;
    }
    this.continueClicked.emit(isValid);
    console.log('submmited');
  }

  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }
}
