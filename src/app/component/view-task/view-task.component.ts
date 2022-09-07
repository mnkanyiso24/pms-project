import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { Task } from 'src/app/task'; 

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  task: Task[] = [];
  constructor(private pservice:ProjectService) { }

  ngOnInit(){
    this.pservice.getTask().subscribe((data:Task[])=>{
      this.task=data;
      
    })
    
  }
}
