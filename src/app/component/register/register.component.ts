import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProjectService } from 'src/app/shared/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private register:ProjectService,
   ) { }
   addForm:FormGroup | any;
  ngOnInit(){
    this.addForm=this.formBuilder.group({
      fName:['', Validators.required],
      lName:['', Validators.required],
      pass:['',Validators.required],
      cpass:['', Validators.required],
      email:['', Validators.required],
      phones:['', Validators.required],
      address:['',Validators.required],
      idNo:['',Validators.required],
      role:['',Validators.required],
      gender:['',Validators.required]
      
    });
  }
  onSubmit(){
     this.register.addUser(this.addForm.value)
      .subscribe(_data =>{
      this.router.navigate(['login']);
    })
  }


}
