import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinelabreportsComponent } from '../onlinelabreports/onlinelabreports.component';
import { AnantapurComponent } from '../anantapur/anantapur.component';
import { KurnoolComponent } from '../kurnool/kurnool.component';
import { NelloreComponent } from '../nellore/nellore.component';
import { SecundrabadComponent } from '../secundrabad/secundrabad.component';
import { RajamendryComponent } from '../rajamendry/rajamendry.component';
const routes: Routes = [
  {
    path: '',
    component: OnlinelabreportsComponent,
    children: [
      { path: 'Anantapur', component: AnantapurComponent },
      { path: 'Kurnool', component: KurnoolComponent },
      { path: 'nellore', component: NelloreComponent },
      { path: 'Secundrabad', component: SecundrabadComponent },
      {
        path: 'Rajamendry',
        component: RajamendryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineRoutingModule {}
