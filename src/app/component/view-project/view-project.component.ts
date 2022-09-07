import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from 'src/app/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  project: Project[] = [];
  _id: any;
  
  

  constructor(private pservice:ProjectService, private router:Router) { }

  ngOnInit(){
    this.pservice.getProject().subscribe((data:Project[])=>{
      this.project=data;
      
    })
    
  }
  delete(project:Project): void{
    this.pservice.deleteProject(project.sId)
    .subscribe(_data =>{
      this.project = this.project.filter(u => u !==project); 
    })

  }
  edit(project:Project){
    this._id= project.sId;
    this.router.navigate(['editProject/'+this._id])
  }

} 
