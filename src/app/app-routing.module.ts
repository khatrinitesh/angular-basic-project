import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

// ROUTING SWITCH ANOTHER PAGES
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
  { path: 'emp/emp-create', loadChildren: () => import('./emp/emp-create/emp-create.module').then(m => m.EmpCreateModule) },
  { path: 'emp/emp-edit', loadChildren: () => import('./emp/emp-edit/emp-edit.module').then(m => m.EmpEditModule) },
  { path: 'emp/emp-list', loadChildren: () => import('./emp/emp-list/emp-list.module').then(m => m.EmpListModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
