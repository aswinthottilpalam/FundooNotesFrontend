import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userService/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  hide : boolean = true;

  constructor(private formBuilder: FormBuilder, private user: UserserviceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(){
    // console.log(this.registerForm.value);
    this.submitted = true;

    if(this.loginForm.valid){
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }

      this.user.login(reqData).subscribe((response: any) =>{
        console.log(response);
        localStorage.setItem('token',response.data);

        this.router.navigateByUrl('/dashboard/notes')

      }, error => {
        console.log(error);
      })

    }
  }

  ShowPassword(){
    this.hide = !this.hide;
  }

}
