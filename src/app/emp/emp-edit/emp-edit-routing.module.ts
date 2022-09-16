import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpEditComponent } from './emp-edit.component';

const routes: Routes = [{ path: '', component: EmpEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpEditRoutingModule { }
