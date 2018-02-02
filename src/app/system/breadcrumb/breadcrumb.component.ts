import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  public header = '';
  public description = '';
  public levels: Array<any> = [];

  constructor( public router: Router,public menuServ: MenuService) {

      /**
       * 路由器变化触发面包屑导航
       */
      let curUrl = "";
      this.router.events
          .filter(event => event instanceof NavigationStart)
          .flatMap((event:NavigationStart) => {
              curUrl = event.url ;
              return this.menuServ.getMenus()
          }).subscribe((menus) =>{
              this.levels = [
                  {
                      icon: 'dashboard',
                      link: ['/'],
                      title: 'Home'
                  }
              ];
              for(let i=0;i<menus.length;i++)
              {
                  let menu = menus[i];
                  if (!menu.hasOwnProperty('sublinks') ){
                      if(menu.link && curUrl == menu.link[0]){
                          this.header = menu.title;
                          this.levels.push({
                              icon: '',
                              link: menu.link,
                              title: menu.title
                          });
                          break;
                      }
                  }else{
                      this.levels.push({
                          icon: '',
                          link: '',
                          title: menu.title
                      });
                      let find = false;
                      for (let j=0;j<menu.sublinks.length;j++){
                          let submenu = menu.sublinks[j];
                          if (submenu.link[0] == curUrl){
                              this.levels.push({
                                  icon: '',
                                  link: curUrl,
                                  title: submenu.title
                              });
                              find = true
                          }

                      }
                      if (find) break;
                  }

              }

      });
  }

    public ngOnInit() {
        this.header = '首页';
        this.levels = [
            {
                icon: 'dashboard',
                link: ['/'],
                title: 'Home'
            },
            {
                icon: '',
                link: ['/'],
                title: '首页'
            }
        ];
    }

}
