import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinelabreportsComponent } from './onlinelabreports/onlinelabreports.component';
import { AnantapurComponent } from './anantapur/anantapur.component';
import { KurnoolComponent } from './kurnool/kurnool.component';
import { NelloreComponent } from './nellore/nellore.component';
import { SecundrabadComponent } from './secundrabad/secundrabad.component';
import { RajamendryComponent } from './rajamendry/rajamendry.component';
import { OnlineRoutingModule } from './online-routing/online-routing.module';



@NgModule({
  declarations: [
    OnlinelabreportsComponent,
    AnantapurComponent,
    KurnoolComponent,
    NelloreComponent,
    SecundrabadComponent,
    RajamendryComponent
  ],
  imports: [
    CommonModule,OnlineRoutingModule
  ]
})
export class OnlinelabreportsModule { }
