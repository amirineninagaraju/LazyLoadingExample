import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalPatientsComponent } from './international-patients/international-patients.component';
import { KeySpecialtiesComponent } from './key-specialties/key-specialties.component';
import { LocationsComponent } from './locations/locations.component';
import { PatientTestimonialsComponent } from './patient-testimonials/patient-testimonials.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { TechnologyAndInnovationComponent } from './technology-and-innovation/technology-and-innovation.component';
import { InternationalRoutingModule } from './international-routing/international-routing.module';

@NgModule({
  declarations: [
    InternationalPatientsComponent,
    KeySpecialtiesComponent,
    LocationsComponent,
    PatientTestimonialsComponent,
    SpecialtiesComponent,
    TechnologyAndInnovationComponent,
  ],
  imports: [CommonModule,InternationalRoutingModule],
})
export class InternationalPatientsModule {}
