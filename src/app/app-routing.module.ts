import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from './cursos/cursos.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES) ],
    exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule{ }