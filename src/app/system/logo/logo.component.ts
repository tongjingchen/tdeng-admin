import { Component, Input, OnInit } from '@angular/core';

@Component( {
    selector: 'app-logo',
    templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  public logo: any;
  @Input() hide = '';

  constructor() { }

  public ngOnInit() {

      this.logo  = {
          html_mini: 'TD<b>deng</b>',
          html_lg: '<b>tdeng</b>Admin',
      };
  }
}
