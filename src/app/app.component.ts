import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabService } from './tab.service';
import { Subscription } from 'rxjs'; 
import {LazyLoaderService} from './lazy-loader/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'lazy-loading';
  subscription: Subscription;
  tabs:any=[];

  @ViewChild(TabsComponent,{static: false}) tabsComponent;
  @ViewChild('about',{static: false}) aboutTemplate;
  @ViewChild('moduleLoader', {static: false}) moduleLoader;

  constructor(private tabService: TabService,private loader: LazyLoaderService) {
    // subscribe to home component messages
    this.subscription = this.tabService.getTab().subscribe(tab => {
        if (tab) {
          this.tabs.push(tab.tab);
          
          if(this.tabs.length>2){
            this.tabsComponent.openTab(tab.tab.name, this.aboutTemplate, {}, true);
           // this.router.navigate(['modb']);
          }else{
            //this.router.navigate(['upload']);
          this.tabsComponent.openTab(tab.tab.name, this.moduleLoader, {}, true);
          // this.tabsComponent.lazyLoad(tab.tab.name, this.container, {}, true);
          // this.loader.load('lazy-comp', this.container);
          }
        } else { 
          console.error('no tab');
        }
      });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
