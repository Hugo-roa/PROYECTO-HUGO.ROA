import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

console.log('LOGIN PAGE CARGADA');

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;

  validation_Messages= {
    email:[
      {
        type: "required", message:"email oblidatorio"
      },
      {
        type: "email", message:"email invalido"
      }
      
    ],

    password:[
      {
        type: "required", message:"password oblidatorio"
      },
      {
        type: "password" , message:"password invalido"
      }
      
    ]

  }
  
  constructor(private formBuilder:FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email:new FormControl(
       '',
       Validators.compose([
        Validators.required,
        Validators.email
       ])
      ),
      password: new FormControl(
       '',
       Validators.compose([
        Validators.required,
        Validators.minLength(8)
       ])
      )


       
      
    })
  }

  ngOnInit() {
    
  }

  loginUser(credentials: any) {
    console.log( credentials)

  }

}
