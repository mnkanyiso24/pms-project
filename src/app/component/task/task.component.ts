import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProjectService } from 'src/app/shared/project.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private task:ProjectService,
   ) { }
   addForm:FormGroup | any;
  ngOnInit(){
    this.addForm=this.formBuilder.group({
      projectName:['', Validators.required],
      taskId:['', Validators.required],
      taskName:['',Validators.required],
      taskDescription:['', Validators.required],
      taskDueDate:['', Validators.required],
      whoDoTask:['', Validators.required]
      
      
    });
  }
  onSubmit(){
     this.task.addTask(this.addForm.value)
      .subscribe(_data =>{
      this.router.navigate(['viewTask']);
    })
  }


}
