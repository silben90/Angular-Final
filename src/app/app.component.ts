import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AuthService } from './servicios/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi portfolio Web';
  isUserLogged: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void{
    this.isUserLogged = this.authService.isUserLogged();
  }
}


