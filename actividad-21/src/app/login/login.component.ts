import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup = new FormGroup({});
  submitted = false;
  resultado = '';
  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.inicializarFormulario()
  }


  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.formulario.controls.username.value === 'AD' && this.formulario.controls.password.value === '123456'){
      localStorage.setItem('logged', 'true')
      this.router.navigate(["/home"]);
    }
  }
}
