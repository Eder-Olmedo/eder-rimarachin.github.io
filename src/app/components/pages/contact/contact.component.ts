import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  [x: string]: any;

  public CONTENT1: string = "https://api.whatsapp.com/send/?phone=%2B51927902081&text=Hello+Eder,+I+would+like+to+contact+you&app_absent=0";
  public CONTENT2: string = "https://api.whatsapp.com/send/?phone=%2B51927902081&text=";
  public msj: string = "";

  public profileForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      cellular: [null, [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.email],
      data_add: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  numberUp(e: any) {
    var key = e.charCode;
    return key >= 48 && key <= 57;
  }

  validForm(): boolean {

    if (this.profileForm.invalid) {
      return false;
    }

    const name: string = this.profileForm.get('name')?.value;
    const cellular: string = this.profileForm.get('cellular')?.value;
    const email: string = this.profileForm.get('email')?.value;
    const data_add: string = this.profileForm.get('data_add')?.value;

    this.msj = `Name:+%20${name}.+%20+Cellular:+%20${cellular}.%20+Email:+%20${email}.%20+Message:+%20${data_add}`;
    return true;
  }

  onSubmit() {
    console.log('datos: ', this.profileForm.value)
    if (this.profileForm.untouched) {
      window.open(this.CONTENT1, '_blank')
    } else {
      if (this.validForm()) {
        window.open(this.CONTENT2 + this.msj, '_blank')
      }
    }
  }
}
