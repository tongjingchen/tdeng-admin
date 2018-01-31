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


    public thisPage(item) {
        this.page.currentPage = item;
        this.loadPages();
    }

    public nextPage() {
        if ( this.page.currentPage < this.pageNums){
            this.page.currentPage  = this.page.currentPage+1;
            this.loadPages();
        }
    }

    public prevPage() {
        if ( this.page.currentPage >1){
            this.page.currentPage  = this.page.currentPage-1;
            this.loadPages();
        }
    }

    public ngOnInit() {
        this.loadPages();
    }

    public ngOnDestroy() {
        // removing the header
    }
    public loadPages() {
        const pagelength = 3;
        this.onPageChange.emit(this.page.currentPage ); // 触发查询翻页
        this.pageList = [];
        this.pageNums = Math.ceil(this.page.totalCnt / this.page.itemsPerPage);

        for (let i=this.page.currentPage-pagelength;i<this.page.currentPage;i++)
        {
            if (i>0){
                this.pageList.push(i);
            }
        }
        this.pageList.push(this.page.currentPage);
        let rightindex = this.page.currentPage + 1;
        while ((rightindex < this.pageNums) && ( rightindex - this.page.currentPage <= pagelength ) )
        {
            this.pageList.push(rightindex);
            rightindex ++;
        }

    }
}
