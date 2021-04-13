import {Component} from '@angular/core';

@Component({
  selector: 'app-pmroot',
  template: `
    <div> <h1> {{pageTitle}}</h1>
      <app-product-list></app-product-list>
    </div>
  `
})
export class AppComponent{
  pageTitle = 'Gestão de Produtos do Leo';
}
