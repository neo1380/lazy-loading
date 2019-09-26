import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { HomeComponent } from './home/home.component';
import { DynamicTabsDirective } from "./tabs/dynamic-tabs.directive";
/* import { DynamicContainerComponent }  from './dynamic.container'; */
import {provideRoutes} from '@angular/router';
import {lazyWidgets, lazyArrayToObj} from './lazy-loader/lazy-widgets';
import {LAZY_WIDGETS} from './lazy-loader/tokens';
import {LazyLoaderService} from './lazy-loader/lazy-loader.service';
import { FooterComponent } from './footer/footer.component';
import { ModuleLoaderComponent } from './module-loader/module-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    TabComponent,
    HomeComponent,
    DynamicTabsDirective,
    FooterComponent,
    ModuleLoaderComponent
    /* DynamicContainerComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }, LazyLoaderService, provideRoutes(lazyWidgets)],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [TabComponent]
})
export class AppModule { }
