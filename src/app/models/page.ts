export class Page {
    public currentPage: number;
    public itemsPerPage: number;
    public totalCnt: number;

    public constructor( currentPage: number , itemsPerPage: number , totalCnt: number ) {
        this.currentPage =  currentPage || 1;
        this.itemsPerPage =  itemsPerPage || 10;
        this.totalCnt =  totalCnt || 0;
    }
    public getName() {
    }
}
