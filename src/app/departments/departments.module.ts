import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments/departments.component';
import { AccidentComponent } from './accident/accident.component';
import { ArthroscopyComponent } from './arthroscopy/arthroscopy.component';
import { BariatricSurgeryComponent } from './bariatric-surgery/bariatric-surgery.component';
import { BiochemistryComponent } from './biochemistry/biochemistry.component';
import { CancerRehabilitationCentreComponent } from './cancer-rehabilitation-centre/cancer-rehabilitation-centre.component';
import { DeapartmentRoutingModule } from './department-routing/department-routing.module';

@NgModule({
  declarations: [
    DepartmentsComponent,
    AccidentComponent,
    ArthroscopyComponent,
    BariatricSurgeryComponent,
    BiochemistryComponent,
    CancerRehabilitationCentreComponent,
  ],
  imports: [CommonModule, DeapartmentRoutingModule],
})
export class DepartmentsModule {}
