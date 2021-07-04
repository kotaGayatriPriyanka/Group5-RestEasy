import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { CredentialsService } from 'src/app/services/credentials.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private service: CredentialsService, private formBuilder: FormBuilder) { }
  login2: Login = new Login();
  aFormGroup!: FormGroup;
  ngOnInit(): void {

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    })
  }
  siteKey: string = "6LdloG4bAAAAAAr6PxiAPQNSgonwmmLMRq50NsMi";
  customerEmail: string = "";
  model: any = {}
  login(email: string, password: string) {
    this.service.getLoginCredentails(email, password).subscribe(data => {
      this.service.customerEmail = this.customerEmail;
      this.service.setToken(data.token);
      this.service.submitted = true;
      this.router.navigateByUrl("/Adigas")
    },
      e => {
        console.log(e)
        alert("Please enter valid credentials")
      }
    )
  }
}
