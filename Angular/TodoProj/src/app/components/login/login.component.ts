import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JpaAuthenticationService } from 'src/app/services/jpa-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private jpaAuthService: JpaAuthenticationService) { }

  private username: string;
  private password: string;
  private errorMessage: string;

  ngOnInit() {
  }

  handleLogin() {
    
    // Json web token authentication service
    this.jpaAuthService.executeJwtAuthService(this.username, this.password).subscribe(
      data => {

        // If successfuly response come back navigate to welcome page
        this.router.navigate(['welcome', this.username]);
        this.errorMessage = '';

      },
      error => {

        // If some error happend show message on frontend
        this.errorMessage = 'Invalid user information!';
      }
    );
  }
}
