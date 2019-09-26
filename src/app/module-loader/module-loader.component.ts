import { Component, OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import {LazyLoaderService} from '../lazy-loader/lazy-loader.service';
import { TabService } from '../tab.service';

@Component({
  selector: 'module-loader',
  templateUrl: './module-loader.component.html',
  styleUrls: ['./module-loader.component.scss']
})
export class ModuleLoaderComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;
  constructor(private loader: LazyLoaderService,private tabService:TabService) { }

  ngOnInit() {
    /* console.log('module loads')
    console.log('on after init', this.container); */
  }
  
  ngAfterViewInit() {
  /*   console.log('on after view init', this.container); */
    let activeModule = this.tabService.getActiveModuleName();
    this.loader.load(activeModule, this.container);
  }

}
