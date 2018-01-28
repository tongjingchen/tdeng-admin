import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BreadcrumbService {
  public current: ReplaySubject<any>;

  constructor() {
    this.current = new ReplaySubject(1);
  }

  public setCurrent(data: any) {
    this.current.next(data);
  }

  public getCurrent() {
    return this.current;
  }
}
