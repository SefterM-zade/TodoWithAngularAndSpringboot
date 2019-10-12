import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  // This message show at footer tag
  private showAtFooter: string = 'All rights reserved @SefterMehdizade';

  ngOnInit() {
  }

}
