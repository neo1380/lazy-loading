/* import { 
    Component,
    ViewChild,
    OnInit,
    OnDestroy,
    Input, 
    ViewContainerRef,
    NgModuleFactory,
    ComponentRef
  } from '@angular/core';
  
  import { LazyLoadConfig } from './lazy-load.module';
  
  @Component({
    selector: 'dynamic-container',
    template: `
      <ng-template #dyncontainer></ng-template>      
    `,
    styles: [],
    providers:[]
  })
  export class DynamicContainerComponent implements OnInit,OnDestroy {
    @ViewChild('dyncontainer', {static: true, read: ViewContainerRef }) vcRef: ViewContainerRef;
    loaded: boolean;
  
    constructor(private moduleLoader: NgModuleFactory) { }
  
    compRef: ComponentRef<any>;
  
    @Input() modulePath: string;
    @Input() moduleName: string;

    ngOnInit() {
        console.log('dynamic init')
        this.loadComponent();
   }

    loadComponent() {
      this.moduleLoader.load(`${this.modulePath}#${this.moduleName}`)
        .then((moduleFactory: NgModuleFactory<any>) => {
          const vcRef = this.vcRef;
          const ngModuleRef = moduleFactory.create(vcRef.parentInjector);
          const comp = ngModuleRef.injector.get(LazyLoadConfig).component;
          const compFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(comp);
          this.compRef = vcRef.createComponent(compFactory, 0, ngModuleRef.injector);
        });
    }
  
    ngOnDestroy() {
      this.compRef.destroy();
    }
  } */