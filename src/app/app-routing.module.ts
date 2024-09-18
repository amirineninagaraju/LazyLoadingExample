import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsModule } from './departments/departments.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  //EACH ROUTE OBJECT IS A COMBINATION OF PATH AND COMPONENT.
  //EACH OBJECT REPRESENTS ONE ROUTE.cd
  { path: '', component: HomeComponent }, //default component display  purpose we mentoned here
  {
    path: 'Departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: 'Institue',
    loadChildren: () =>
      import('./institute/institute.module').then((m) => m.InstituteModule),
  },
  {
    path: 'InternationalPatients',
    loadChildren: () =>
      import('./international-patients/international-patients.module').then(
        (m) => m.InternationalPatientsModule
      ),
  },
  {
    path: 'OnlineLabReports',
    loadChildren: () =>
      import('./onlinelabreports/onlinelabreports.module').then(
        (m) => m.OnlinelabreportsModule
      ),
  },
  {
    path: 'Procedures',
    loadChildren: () =>
      import('./procedures/procedures.module').then((m) => m.ProceduresModule),
  },
  //wild card routes declared at ending of all the routes.
  //If your route is not matched with below routes this wild card route will call.
  { path: '**', component: PageNotFoundComponent },
];
//for Root used in Parent module routes configuration purpose used
//for child used in child module routes configuration purpose used
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
