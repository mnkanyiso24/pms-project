import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../project';
import { AddUser} from'../add-user';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  getProject(){
    return this.http.get<Project[]>('http://localhost:8080/my-app/retrieve.php');
  }

  getTask(){
    return this.http.get<Task[]>('http://localhost:8080/my-app/viewTask.php')
  }

  

  deleteProject(sId:number){
    return this.http.delete<Project[]>('http://localhost:8080/my-app/deleteProjectApi.php?sId='+sId);
  }

  getById(id:number){
    return this.http.get<Project[]>('http://localhost:8080/my-app/getById.php?sId='+id);
  }

  addUser(addUser:AddUser){
    return this.http.post('http://localhost:8080/my-app/insert.php',addUser);
  }

  addTask(task:Task){
    return this.http.post('http://localhost:8080/my-app/taskApi.php',task);
  }
}
