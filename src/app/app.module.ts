import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { routing } from './app.routes';
import { HeaderWidgetComponent } from './system/header-widget/header-widget.component';
import {UserService} from './services/user.service';
import {CanActivateGuard} from './services/can-activate-auard.service';
import {AppFooterComponent} from './system/app-footer';
import {AppHeaderComponent} from './system/app-header';
import {ControlSidebarComponent} from './system/control-sidebar/control-sidebar.component';
import {LayoutLoginComponent} from './system/login/login.component';
import {LayoutRegisterComponent} from './system/register/register.component';
import {TranslateService} from './services/translate.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ToasterModule} from 'angular2-toaster';
import {RouterModule} from '@angular/router';
import {BreadcrumbComponent} from './system/breadcrumb';
import {BreadcrumbService} from './services/breadcrumb.service';
import {MessagesService} from './services/messages.service';
import {NotificationsService} from './services/notifications.service';
import {LogoComponent} from './system/logo/logo.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipes';
import {ComponentLoaderComponent} from './widgets/component-loader/component-loader.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MenuAsideComponent} from './system/menu-aside/menu-aside.component';
import {LayoutComponent} from './system/layout.component';
import {CookieService} from 'ngx-cookie-service';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

const pages = [
    HomeComponent,
    PageNumComponent,
    LoginComponent,
    RegisterComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    HeaderWidgetComponent,
    LayoutComponent, LayoutLoginComponent, LayoutRegisterComponent, AppFooterComponent, AppHeaderComponent,
      MenuAsideComponent, ControlSidebarComponent, BreadcrumbComponent, LogoComponent, SafeHtmlPipe, ComponentLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    RouterModule,
    HttpClientModule,
    routing,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (HttpLoaderFactory),
              deps: [HttpClient]
          }
      }),
  ],
  providers: [CanActivateGuard,
      UserService,
     /* TranslateService,*/
      BreadcrumbService,
      MessagesService,
      NotificationsService,
      /*LoggerService,*/ CookieService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
      HeaderWidgetComponent
  ]
})
export class AppModule { }
