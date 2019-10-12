import { Component, OnInit } from '@angular/core';
import { JpaAuthenticationService } from 'src/app/services/jpa-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private basicJpaAuthService: JpaAuthenticationService) { }

  private username: string;;

  ngOnInit() {
    
    // Get username from sessionStorage
    this.username = this.basicJpaAuthService.getAuthenticatedUser();
  }
}
