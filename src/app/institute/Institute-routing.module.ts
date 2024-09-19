import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitueComponent } from './institue/institue.component';
import { InstituteOfCardiacSciencesComponent } from './institute-of-cardiac-sciences/institute-of-cardiac-sciences.component';
import { InstituteOfDentalScienceComponent } from './institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './institute-of-neuro-sciences/institute-of-neuro-sciences.component';

const routes: Routes = [
  {
    path: '',
    component: InstitueComponent,
    children: [
      {
        path: 'InstituteOfCardiacSciences',
        component: InstituteOfCardiacSciencesComponent,
      },
      {
        path: 'InstituteOfDentalScience',
        component: InstituteOfDentalScienceComponent,
      },
      {
        path: 'InstituteOfGastroenterologyHepatology',
        component: InstituteOfGastroenterologyHepatologyComponent,
      },
      {
        path: 'InstituteOfHeartLungTransplantation',
        component: InstituteOfHeartLungTransplantationComponent,
      },
      {
        path: 'InstituteOfNeuroSciences',
        component: InstituteOfNeuroSciencesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteRoutingModule {}
