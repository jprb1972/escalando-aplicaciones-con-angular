import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/modules';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    email: new FormControl('',  [Validators.required, Validators.minLength(3)]),
    password: new FormControl('',  [Validators.required, Validators.minLength(5)]),
  });

  isLoading = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.registerService
      .register(this.form.value)
      .subscribe(() => {
        this.isLoading = false;
      }, (reason) => {
        this.isLoading =false;
        alert(JSON.stringify(reason));
      })
      ;
      // alert(  JSON.stringify( this.form.value )  );
    }
  }

}
