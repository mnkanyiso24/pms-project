import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './component/register/register.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { ViewProjectComponent } from './component/view-project/view-project.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { ViewTaskComponent } from './component/view-task/view-task.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TaskMenuComponent } from './component/task-menu/task-menu.component';
import { ProjectMenuComponent } from './component/project-menu/project-menu.component';
import { PerformanceMenuComponent } from './component/performance-menu/performance-menu.component';
import { LoginComponent } from './component/login/login.component';

import { ProjectService } from './shared/project.service';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';


 import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './component/task/task.component';
import { EditProjectComponent } from './component/edit-project/edit-project.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreateProjectComponent,
    ViewProjectComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    SidebarComponent,
    DashboardComponent,
    TaskMenuComponent,
    ProjectMenuComponent,
    PerformanceMenuComponent,
    LoginComponent,
    TaskComponent,
    EditProjectComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
