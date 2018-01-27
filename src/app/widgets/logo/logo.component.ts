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
          html_mini: 'NG<b>X</b>',
          html_lg: '<b>NGX</b>Admin-LTE',
      };
  }
}
