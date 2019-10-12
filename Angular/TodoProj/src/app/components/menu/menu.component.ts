import { Component, OnInit } from '@angular/core';
import { JpaAuthenticationService } from 'src/app/services/jpa-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private jpaAuthService: JpaAuthenticationService) { }

  ngOnInit() {
  }

}
