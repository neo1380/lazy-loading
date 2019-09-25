import { Component,ViewChild } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabService } from './tab.service';
import { Subscription } from 'rxjs'; 

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
  @ViewChild('test',{static: false}) testTemplate;
  @ViewChild('dynamicModule',{static: false}) dynamicModule;

  constructor(private tabService: TabService) {
    // subscribe to home component messages
    this.subscription = this.tabService.getTab().subscribe(tab => {
        if (tab) {
          this.tabs.push(tab.tab);
          
          if(this.tabs.length>2){
            this.tabsComponent.openTab(tab.tab.name, this.testTemplate, {}, true);
           // this.router.navigate(['modb']);
          }else{
            //this.router.navigate(['upload']);
            this.tabsComponent.openTab(tab.tab.name, this.dynamicModule, {}, true);
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
