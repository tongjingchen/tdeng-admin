import {Component, OnInit} from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  public display = false;
  public header = '';
  public description = '';
  public levels: Array<any> = [];

  constructor(private breadServ: BreadcrumbService, public cookicServ: CookieService) {
    // getting the data from the services
    this.breadServ.getCurrent().subscribe((data) => {
      this.display = data.display;
      this.header = data.header;
      this.levels = data.levels;
      this.description = data.description;
    });
  }

    public ngOnInit() {
        const str = this.cookicServ.get('menu_cookie');
        if (str) {
            const data = JSON.parse(str);
            this.display = data.display;
            this.header = data.header;
            this.levels = data.levels;
            this.description = data.description;
        }
    }

}
