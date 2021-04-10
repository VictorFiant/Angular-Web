import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  
  title: String = "field"
  myForm: FormGroup

  constructor(private fb: FormBuilder) {
    
    /**
     * Build register's form with every validator
     */
    
    this.myForm = this.fb.group({
    
      name: ["", [Validators.required,]],

      surname: ["", [Validators.required,]],

      email: ["", [Validators.required,]],

      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    
    })
  }
  
  register() {
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}