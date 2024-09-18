import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsModule } from './departments/departments.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InstituteModule } from './institute/institute.module';
import { InternationalPatientsModule } from './international-patients/international-patients.module';
import { OnlinelabreportsModule } from './onlinelabreports/onlinelabreports.module';
import { ProceduresModule } from './procedures/procedures.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartmentsModule,
    InstituteModule,
    InternationalPatientsModule,
    OnlinelabreportsModule,
    ProceduresModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
