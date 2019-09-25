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
import { DynamicContainerComponent }  from './dynamic.container';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    TabComponent,
    HomeComponent,
    DynamicTabsDirective,
    DynamicContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [TabComponent]
})
export class AppModule { }
