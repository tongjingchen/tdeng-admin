import {Component, Input, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';
import {NavigationStart, Router} from '@angular/router';
import {MenuService} from '../../services/menu.service';

@Component({
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent  implements OnInit{
    @Input() public display_messages = true;
    @Input() public display_notifications = true;
    @Input() public display_tasks = true;
    @Input() public display_user = true;
    @Input() public display_control = true;
    @Input() public header_components = [];
    topTabList = [];
    curUrl = "";
    constructor(private userService: UserService, private router: Router,public menuServ: MenuService) {

        let curmenu = {
            active:true,
            routeUrl:'' ,
            menuName:''
        }


        this.router.events
            .filter(event => event instanceof NavigationStart)
            .flatMap((event:NavigationStart) => {
                console.log(event)
                this.curUrl = event.url ;
                return this.menuServ.getMenus()
            }).subscribe((menus) =>{
            for(let i=0;i<menus.length;i++)
            {
                let menu = menus[i];
                if (!menu.hasOwnProperty('sublinks') ){
                    if(menu.link && this.curUrl == menu.link[0]){
                        curmenu = {
                            active:true,
                            routeUrl:menu.link ,
                            menuName:menu.title
                        }
                        break;
                    }
                }else{
                    let find = false;
                    for (let j=0;j<menu.sublinks.length;j++){
                        let submenu = menu.sublinks[j];
                        if (submenu.link[0] == this.curUrl){
                            curmenu = {
                                active:true,
                                routeUrl:submenu.link[0] ,
                                menuName:submenu.title
                            }
                            find = true
                            break;
                        }

                    }
                    if (find) break;
                }

            }

            let isAdd = true;
            for (let i=0; i<this.topTabList.length; i++){
                this.topTabList[i].active = false;
                if (curmenu.menuName == this.topTabList[i].menuName){
                    isAdd = false;
                    this.topTabList[i].active = true;
                }
            }
            if (isAdd){
                this.topTabList.push( curmenu);
            }

        });
    }

    ngOnInit() {
    }
    //  切换tab页面
    public chgTab(menuName: any ) {
        for (let i=0; i<this.topTabList.length; i++){
            this.topTabList[i].active = false;
            if (menuName == this.topTabList[i].menuName){
                this.topTabList[i].active = true;
            }
        }
    }
    //  关闭tab页面
    public closeTab(menuName: any )
    {
        let index=this.topTabList.findIndex(p=>p.menuName==menuName);
        console.log(this.topTabList[index].routeUrl +'-'+ menuName +'-'+index)
        this.topTabList.splice(index,1)
        this.router.navigate(['/page/3']);

        //this.topTabList.splice(index,1)
        //this.router.navigate(['/page/1']);
    }
    logout(): void {
        this.userService.logout();
    }

}
