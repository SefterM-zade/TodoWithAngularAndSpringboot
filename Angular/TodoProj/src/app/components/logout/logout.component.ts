import { Component, OnInit } from '@angular/core';
import { JpaAuthenticationService } from 'src/app/services/jpa-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private jpaAuthService: JpaAuthenticationService) { }

  private successMessage: string;

  ngOnInit() {

    // When page loads logout service works and show success message
    this.jpaAuthService.logout();
    this.successMessage = 'Successful logout!';
  }

}
