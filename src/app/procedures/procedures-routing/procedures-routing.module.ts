import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { ProceduresComponent } from '../procedures/procedures.component';
import { AnteriorResectionComponent } from '../anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from '../aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from '../aortic-stent-graft/aortic-stent-graft.component';
import { ArthroscopyComponent } from 'src/app/departments/arthroscopy/arthroscopy.component';
import { BrainCancerComponent } from '../brain-cancer/brain-cancer.component';
const routes: Routes = [
  {
    path: '',
    component: ProceduresComponent,
    children: [
      { path: '', redirectTo: 'Procedures', pathMatch: 'full' },
      {
        path: 'Procedures',
        component: ProceduresComponent,
      },
      { path: 'AnteriorResection', component: AnteriorResectionComponent },
      { path: 'AorticAnuerysm', component: AorticAnuerysmComponent },
      { path: 'AorticStentGraft', component: AorticStentGraftComponent },
      { path: 'Arthroscopy', component: ArthroscopyComponent },
      {
        path: 'BrainCancer',
        component: BrainCancerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class ProceduresRoutingModule { }
