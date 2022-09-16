import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpListComponent } from './emp-list.component';

const routes: Routes = [{ path: '', component: EmpListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpListRoutingModule { }
