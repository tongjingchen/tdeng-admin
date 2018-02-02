import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class MenuService {
  public menus: ReplaySubject<any>;

  constructor() {
    this.menus = new ReplaySubject(1);
  }

  public setMenus(data: any) {
    this.menus.next(data);
  }

  public getMenus() {
    return this.menus;
  }
}
