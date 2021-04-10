import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  title: String = "field"
  myForm: FormGroup

  constructor(private fb: FormBuilder) {
    /**
     * Build login's form 
     */
    this.myForm = this.fb.group({
    
      email: ["", [Validators.required, Validators.email]],
      
      password: ["", [Validators.required, Validators.minLength(6)]],
    
    })
  }

  login(): void {
    
    console.log(this.myForm.value);
  }

}
