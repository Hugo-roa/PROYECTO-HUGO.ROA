import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule , NavController} from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService} from '../services/auth.service'
import { StorageService } from '../services/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;

  errorMessage: string = "" ;

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
  
  constructor(private formBuilder:FormBuilder, private authService: AuthService, private navCtrl:NavController,private storagservi: StorageService,private router: Router) { 
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
  console.log(credentials);

  this.authService.loginUser(credentials).then(async res => {
    this.errorMessage = "";

    
    await this.storagservi.set('login', true);
    console.log(' login guardado en Ionic Storage');

  
    this.router.navigateByUrl('/intro', { replaceUrl: true });
  })
  .catch(error => {
    this.errorMessage = error;
  });
  }
  goRegister() {
  this.navCtrl.navigateForward('/register');
}
}