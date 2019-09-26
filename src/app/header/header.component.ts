import { Component, OnInit } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count:number=0;
  tabs=[
    {'name':'tab1','packageid':"pkg123456789",'module':'lazy-comp'},
    {'name':'tab2','packageid':"pkg123456789",'module':'tree'},
    {'name':'tab3','packageid':"pkg123456789",'module':'moduleb'},
    {'name':'tab4','packageid':"pkg123456789",'module':'tree'},
    {'name':'tab5','packageid':"pkg123456789",'module':'lazy-comp'}
  ];

  constructor(private tabService:TabService) { }

  ngOnInit() {
    
  }

  addTab(){  
    if(this.count>=this.tabs.length){
      this.count=0;
    }
    console.log(this.tabs[this.count])
    this.tabService.createTab(this.tabs[this.count]);
    this.count++;
  }

}
