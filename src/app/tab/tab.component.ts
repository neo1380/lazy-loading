import { Component, OnInit,OnDestroy } from '@angular/core';
import { TabService } from '../tab.service';
import { Subscription } from 'rxjs';
import {ChangeDetectorRef} from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnDestroy {
  
  subscription: Subscription;
  tabs:any=[];

   constructor(private tabService: TabService,private ref: ChangeDetectorRef,public router:Router) {
    // subscribe to home component messages
    this.subscription = this.tabService.getTab().subscribe(tab => {
        if (tab) {
          this.tabs.push(tab.tab);
          console.log(this.tabs)
          if(this.tabs.length>2){
            this.router.navigate(['modb']);
          }else{
            this.router.navigate(['upload']);
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
