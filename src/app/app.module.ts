import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RenehomeComponent } from './renehome/renehome.component';
import { RouterModule } from '@angular/router';
import { RenetimerService } from './renetimer.service';
import { RenehistoryComponent } from './renehistory/renehistory.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: RenehomeComponent },
      { path: 'renehistory', component: RenehistoryComponent }
     
    ])
     ],
  declarations: [ AppComponent, RenehomeComponent, RenehistoryComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ RenetimerService ]
})
export class AppModule { }
