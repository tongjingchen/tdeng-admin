import {Component, Input, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {Router} from '@angular/router';

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

    constructor(private userService: UserService,private breadServ: BreadcrumbService, private router: Router,) {
        this.breadServ.getCurrent().subscribe((data) => {
            let curmenu = {
                active:true,
                routeUrl:data.levels.length >1 ?data.levels[2].link:data.levels[0].link ,
                menuName:data.levels.length >1 ?data.levels[2].title:data.levels[0].title
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
        console.log(index)
        this.router.navigate(['/page/1']);
    }
    logout(): void {
        this.userService.logout();
    }

}
