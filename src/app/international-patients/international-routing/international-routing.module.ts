import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InternationalPatientsComponent } from '../international-patients/international-patients.component';
import { KeySpecialtiesComponent } from '../key-specialties/key-specialties.component';
import { LocationsComponent } from '../locations/locations.component';
import { PatientTestimonialsComponent } from '../patient-testimonials/patient-testimonials.component';
import { SpecialtiesComponent } from '../specialties/specialties.component';
import { TechnologyAndInnovationComponent } from '../technology-and-innovation/technology-and-innovation.component';
const routes: Routes = [
  {
    path: '',
    component: InternationalPatientsComponent,
    children: [
      { path: 'KeySpecialties', component: KeySpecialtiesComponent },
      { path: 'Locations', component: LocationsComponent },
      { path: 'PatientTestimonials', component: PatientTestimonialsComponent },
      { path: 'Specialties', component: SpecialtiesComponent },
      {
        path: 'TechnologyAndInnovation',
        component: TechnologyAndInnovationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternationalRoutingModule {}
