import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitueComponent } from './institue/institue.component';
import { InstituteOfCardiacSciencesComponent } from './institute-of-cardiac-sciences/institute-of-cardiac-sciences.component';
import { InstituteOfDentalScienceComponent } from './institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './institute-of-neuro-sciences/institute-of-neuro-sciences.component';
import { InstituteRoutingModule } from './Institute-routing.module';



@NgModule({
  declarations: [
    InstitueComponent,
    InstituteOfCardiacSciencesComponent,
    InstituteOfDentalScienceComponent,
    InstituteOfGastroenterologyHepatologyComponent,
    InstituteOfHeartLungTransplantationComponent,
    InstituteOfNeuroSciencesComponent
  ],
  imports: [
    CommonModule,InstituteRoutingModule
  ]
})
export class InstituteModule { }
