import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userService/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(){
    // console.log(this.registerForm.value);
    this.submitted = true;

    if(this.forgotPasswordForm.valid){
      let reqData = {
        email: this.forgotPasswordForm.value.email,
      }

      this.user.forgotPassword(reqData).subscribe((response: any) =>{
        console.log(response);
      }, error => {
        console.log(error);
      })

    }

  }
}
