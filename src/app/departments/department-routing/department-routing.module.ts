import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from '../departments/departments.component';
import { AccidentComponent } from '../accident/accident.component';
import { ArthroscopyComponent } from '../arthroscopy/arthroscopy.component';
import { BariatricSurgeryComponent } from '../bariatric-surgery/bariatric-surgery.component';
import { BiochemistryComponent } from '../biochemistry/biochemistry.component';
import { CancerRehabilitationCentreComponent } from '../cancer-rehabilitation-centre/cancer-rehabilitation-centre.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent,
    children: [
      { path: 'accident', component: AccidentComponent },
      { path: 'Arthroscopy', component: ArthroscopyComponent },
      { path: 'BariatricSurgery', component: BariatricSurgeryComponent },
      { path: 'Biochemistry', component: BiochemistryComponent },
      {
        path: 'CancerRehabilitationCentre',
        component: CancerRehabilitationCentreComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeapartmentRoutingModule {}
