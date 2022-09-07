import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { TaskMenuComponent } from './component/task-menu/task-menu.component';
import { ProjectMenuComponent } from './component/project-menu/project-menu.component';
import { PerformanceMenuComponent } from './component/performance-menu/performance-menu.component';
import { ViewProjectComponent } from './component/view-project/view-project.component';
import { ViewTaskComponent } from './component/view-task/view-task.component';
import { TaskComponent } from './component/task/task.component';
import { EditProjectComponent } from './component/edit-project/edit-project.component';
const routes: Routes = [
  {path: '', redirectTo:'sidebar', pathMatch:'full'},
  {path: 'sidebar',component:SidebarComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'createProject',component:CreateProjectComponent},
  {path: 'createTask',component:CreateTaskComponent},
  {path: 'taskMenu',component:TaskMenuComponent},
  {path: 'projectMenu',component:ProjectMenuComponent},
  {path: 'performanceMenu',component:PerformanceMenuComponent},
  {path:'viewProject',component:ViewProjectComponent},
  {path:'viewTask',component:ViewTaskComponent},
  {path:'task',component:TaskComponent},
  {path:'editProject/:id',component:EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
