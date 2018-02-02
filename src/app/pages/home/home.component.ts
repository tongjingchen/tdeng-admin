import {Component, OnInit, OnDestroy} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {Page} from '../../models/page';

@Component({
    selector: 'app-home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    public page: Page  ;

    constructor(private msgServ: MessagesService ) {
        // TODO
    }

    public ngOnInit() {
       /* this.breadServ.setCurrent({
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
        });*/
        this.page = new Page(1, 10, 101);


    }
    // 页面变化重新加载页面
    public chgPage(curPage: number ) {
        this.page.currentPage  = curPage;
        // 重新查询
    }

    public ngOnDestroy() {
        // removing the header
    }

}
