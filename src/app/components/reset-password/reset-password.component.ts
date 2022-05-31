import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userService/userservice.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  token: any

  constructor(private formBuilder: FormBuilder, private user: UserserviceService, private activatedRoute:ActivatedRoute) { }

  // ngOnInit() {
  //   this.resetPasswordForm = this.formBuilder.group({
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  ngOnInit(): void {
   
    this.token = this.activatedRoute.snapshot.paramMap.get('token')
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });

  }

  onSubmit(){
    // console.log(this.registerForm.value);
    this.submitted = true;

    if(this.resetPasswordForm.valid){
      let reqData = {
        password: this.resetPasswordForm.value.password,
        confirmPassword: this.resetPasswordForm.value.confirmPassword,
      }
      console.log(this.token);
      this.user.resetPassword(reqData, this.token).subscribe((response: any) =>{
        console.log(response);
      }, error => {
        console.log(error);
      })

    }
  }

}
