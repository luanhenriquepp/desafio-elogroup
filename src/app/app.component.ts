import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'desafio-elogroup';
  form: FormGroup;
  checkSocialMedia: boolean;
  phoneMask = [/\d/, /\d/, '-', /\d/, /\d/ , /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  matcher = new MyErrorStateMatcher();
  disableButtonSave: boolean;


  constructor(private fb: FormBuilder,
              private  http: HttpClient) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.compose([
        Validators.required
      ])),
      phoneNumber: this.fb.control('', Validators.required),
      howIDoKnowTheCompany: this.fb.control('', Validators.required),
      haveSocialMedia: this.fb.control('', Validators.required),
      socialMedia: this.fb.array([])
    });
  }

  socialMedia(event: MatRadioChange) {
    if (event.value === 'sim') {
      return this.checkSocialMedia = true;
    }
    return this.checkSocialMedia = false;
  }

  showOptions(event: MatCheckboxChange): void {
    const socialMedia = this.form.controls.socialMedia as FormArray;

    if (event.checked) {
      socialMedia.push(new FormControl(event.source.value));
    } else {
      const index = socialMedia.controls.findIndex(x => x.value === event.source.value);
      socialMedia.removeAt(index);
    }
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  onSubmit() {
    if (this.form.get('haveSocialMedia').value === 'nao') {
      this.clearFormArray(this.form.get('socialMedia') as FormArray);
    }
    if (this.form.valid) {
      this.disableButtonSave =  true;
      console.log(this.form.value);
       this.http.post('http://localhost:8000', this.form.value).subscribe(resp => {
         return resp;
      });
    }
  }
}
