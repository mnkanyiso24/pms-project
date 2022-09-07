import { Injectable,Output,EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  getProject(){
    return this.http.get<Auth[]>('http://localhost:8080/my-app/loginApi.php')
  }
  }
