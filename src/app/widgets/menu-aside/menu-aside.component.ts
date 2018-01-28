import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit, OnChanges {
  public currentUrl: string;
  public currentUser: User = new User();

  private links: Array<any> = [];
  @Input() display_menu_user = true;
  @Input() display_menu_search = true;

  constructor(private userServ: UserService,
              public router: Router,
              public breadServ: BreadcrumbService,
              public cookicServ: CookieService) {
    // getting the current url
    this.router.events.subscribe((evt: any) => this.currentUrl = evt.url);
    this.userServ.getCurrent().subscribe((user) => this.currentUser = user);
  }

  public ngOnInit() {
    this.links = [
        {
            'header': '菜单导航'
        },
        {
            'title': '首页',
            'icon': 'dashboard',
            'link': ['/']
        },
        {
            'title': '子菜单',
            'icon': 'link',
            'sublinks': [
                {
                    'title': '测试菜单1',
                    'link': ['/page/2'],
                },
                {
                    'title': '测试菜单2',
                    'link': ['/page/3'],
                }
            ]
        },
        {
            'title': '外部链接',
            'icon': 'google',
            'link': ['http://google.com'],
            'external': true,
            'target': '_blank'
        },
        {
            'title': '外部链接1',
            'icon': 'link',
            'sublinks': [
                {
                    'title': 'Github',
                    'link': ['https://github.com/TwanoO67/ngx-admin-lte'],
                    'icon': 'github',
                    'external': true,
                    'target': '_self'
                },
                {
                    'title': 'Yahoo',
                    'link': ['http://yahoo.com'],
                    'icon': 'yahoo',
                    'external': true,
                    'target': '_blank'
                }
            ]
        }
    ];

  }

    public onMenuClick(menu: any, submenu: any) {
        const curMenu = {
            description: '',
            display: true,
            header: submenu.title,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                },
                {
                    icon: '',
                    link: ['/'],
                    title: menu.title
                },
                {
                    icon: '',
                    link: ['/'],
                    title: submenu.title
                }
            ]
        };
        this.breadServ.setCurrent(curMenu);
        this.cookicServ.set('menu_cookie', JSON.stringify(curMenu));
    }

    public ngOnChanges(changes: any) {
    }

}
