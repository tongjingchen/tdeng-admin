import { Component, Input } from '@angular/core';

@Component( {
    selector: 'app-footer',
    styleUrls: ['./app-footer.component.css'],
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
    public footer: any = {};

    constructor() {
        this.footer  = {
            left_part: `<strong>
        Copyright &copy; 2017
        <a href="http://www.weberantoine.fr" >WEBER Antoine</a>.
    	</strong>
      Open-source Sharing`,
            right_part: 'Bootstrapping Ngx-Admin-LTE',
        };
    }
}
