import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { HeaderWidgetComponent } from './system/header-widget/header-widget.component';
import {CanActivateGuard} from './services/can-activate-auard.service';
import {LayoutLoginComponent} from './system/login/login.component';
import {LayoutRegisterComponent} from './system/register/register.component';
import {LayoutComponent} from './system/layout.component';
const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: ''
      },
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home'
      },
      {
        canActivate: [CanActivateGuard],
        component: PageNumComponent,
        path: 'page/:id'
      },
    ],
    component: LayoutComponent,
    data: [{
      'display_tasks': false,
      'header_components': [{
        class: HeaderWidgetComponent,
        data: {
          label: 'test widget'
        }
      }]
    }],
    path: '',
  },
  // not logged routes
  {
    children: [
      {
        component: LoginComponent,
        path: ''
      }
    ],
    component: LayoutLoginComponent,
    path: 'login',
  },
  {
    children: [
      {
        component: RegisterComponent,
        path: ''
      }
    ],
    component: LayoutRegisterComponent,
    path: 'register',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
