import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProjectService } from 'src/app/shared/project.service';
import { Auth } from 'src/app/auth';
import { Router ,Params,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private pservice:ProjectService,
    private routes:ActivatedRoute
   ) { }
 addForm: FormGroup| any ;
  ngOnInit(){
    const routeParams =this.routes.snapshot.params;
    this.pservice.getById(routeParams['id'])
    .subscribe((data:any) =>{
      //console.log(data)
      this.addForm.patchValue(data);
      
    });
    this.addForm=this.formBuilder.group({
    projectName:['', Validators.required],
    objectives:['', Validators.required],
    goal:['', Validators.required],
    sdbipNo:['', Validators.required],   
    ProjectId:['', Validators.required],
   institution:['', Validators.required],
   Annualtarget:['', Validators.required],
   Duedate:['', Validators.required],
   Strategy:['', Validators.required],
   Department:['', Validators.required],
   budget:['', Validators.required],
   Q1:['', Validators.required],
   Q2:['', Validators.required],
   Q3:['', Validators.required], 
   Q4:['', Validators.required],
    
    });

    this.pservice.getById(routeParams['id'])
    .subscribe((data:any) =>{
      //console.log(data)
      this.addForm.patchValue(data);
      
    });
  }
update(){

}

}
