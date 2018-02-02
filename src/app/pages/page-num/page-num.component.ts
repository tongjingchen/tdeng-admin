import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-num',
  styleUrls: ['./page-num.component.css'],
  templateUrl: './page-num.component.html'
})
export class PageNumComponent implements OnInit, OnDestroy {
  public id = 0;
  private sub: any;

  constructor(
    private route: ActivatedRoute
  ) {
    // TODO
  }

  public ngOnInit() {
    // when calling routes change
    const idkey = 'id';
    this.sub = this.route.params.subscribe((data) => {
      this.id = data[idkey];
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.route = null;
  }
}
