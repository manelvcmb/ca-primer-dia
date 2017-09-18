import { Component } from '@angular/core';
import {PrimerComponent} from './primer.component'


@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
            <primer></primer>`,
})
export class AppComponent  { 
  name = 'Complutense'; }
