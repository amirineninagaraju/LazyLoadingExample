import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresComponent } from './procedures/procedures.component';
import { AnteriorResectionComponent } from './anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from './aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from './aortic-stent-graft/aortic-stent-graft.component';
import { ArthroscopyComponent } from './arthroscopy/arthroscopy.component';
import { BrainCancerComponent } from './brain-cancer/brain-cancer.component';
import { ProceduresRoutingModule } from './procedures-routing/procedures-routing.module';



@NgModule({
  declarations: [
    ProceduresComponent,
    AnteriorResectionComponent,
    AorticAnuerysmComponent,
    AorticStentGraftComponent,
    ArthroscopyComponent,
    BrainCancerComponent
  ],
  imports: [
    CommonModule,ProceduresRoutingModule
  ]
})
export class ProceduresModule { }
