import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { InfoComponent } from './components/info/info.component'
import { UserCardComponent } from './components/user-card/user-card.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InfoComponent,},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
