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
    {'name':'CRMR','packageid':"pkg123456789"},
    {'name':'ARGR','packageid':"pkg123456789"},
    {'name':'XRI','packageid':"pkg123456789"},
    {'name':'Risk','packageid':"pkg123456789"},
    {'name':'Return report','packageid':"pkg123456789"}
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
