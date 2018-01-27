import { Component, OnInit, OnDestroy } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {BreadcrumbService} from '../../services/breadcrumb.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public date: Date = new Date();

  constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService
  ) {
    // TODO
  }

  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.setCurrent({
      description: 'HomePage',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        }
      ]
    });

  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
