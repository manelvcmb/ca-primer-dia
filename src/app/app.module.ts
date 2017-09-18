import { NgModule  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PrimerComponent} from './primer.component'
import {DescripFacuComponent} from './descrip-facu.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  PrimerComponent,
                  DescripFacuComponent
                 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
