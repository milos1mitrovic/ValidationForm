import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

  @Output() continueClicked = new EventEmitter<boolean>();
  @Input() signUpForm: FormGroup;

  languages: string[] = ['Portugese', 'English']
  defaultLanguage: string = "Portugese"
  // countries: string[] = ['Brazil']
  defaultCountry: string = 'Brazil';
  // submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      language: new FormControl(null),
      country: new FormControl(null),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, Validators.required),
      zip: new FormControl(null, Validators.required),
    });
    this.signUpForm.controls['language'].setValue(this.defaultLanguage, {onlySelf: true})
    this.signUpForm.controls['country'].setValue(this.defaultCountry, {onlySelf: true})
  }

  onSubmit(isValid: boolean) {
    if (this.signUpForm.valid) {
      console.log('form submitted');
      isValid = this.signUpForm.valid;
    } else {
      this.validateAllFormFields(this.signUpForm); //{7}
      isValid = this.signUpForm.valid;
    }
    this.continueClicked.emit(isValid);
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
