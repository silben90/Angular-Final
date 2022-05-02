import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes= [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'login', component: LoginComponent}
  /*{path: '', redirectTo:'login', pathMatch:'full'}*/
];



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
