import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpCreateRoutingModule } from './emp-create-routing.module';
import { EmpCreateComponent } from './emp-create.component';


@NgModule({
  declarations: [EmpCreateComponent],
  imports: [
    CommonModule,
    EmpCreateRoutingModule
  ]
})
export class EmpCreateModule { }
