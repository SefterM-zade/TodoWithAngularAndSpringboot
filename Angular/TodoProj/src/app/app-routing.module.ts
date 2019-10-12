import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { NegativeRouteGuardService } from './services/negative-route-guard.service';
import { TodoComponent } from './components/todo/todo.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NegativeRouteGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [NegativeRouteGuardService] },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
