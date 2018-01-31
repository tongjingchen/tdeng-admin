import {Component, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';
import {Page} from '../../models/page';

@Component({
    selector: 'app-page',
    styleUrls: [],
    templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, OnDestroy {
    // 输入参数
    @Input() page: Page;
    // 分页变化
    @Output() onPageChange: EventEmitter<Number> = new EventEmitter;
    pageNums: number;
    // 显示的页码列表
    pageList = [];

    constructor() {
        // TODO
    }

    public nextPage() {
        this.onPageChange.emit(33);
    }

    public ngOnInit() {
        this.pageNums = Math.ceil(this.page.totalCnt / this.page.itemsPerPage);
        console.log(this.pageNums)
        for (let i=1;i<7;i++)
        {
            this.pageList.push(i);
        }


    }

    public ngOnDestroy() {
        // removing the header
    }

}
