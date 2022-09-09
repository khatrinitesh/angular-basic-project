// default module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// library package installed
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// component
import { AppComponent } from './app.component';
import { Modal1Component } from './component/modal1/modal1.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UsersComponent } from './component/users/users.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { ClosablealertComponent } from './component/ngbootstrap/closablealert/closablealert.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ErrorComponent } from './pages/error/error.component';
import { ScrollbacktopComponent } from './component/scrollbacktop/scrollbacktop.component';

@NgModule({
  declarations: [
    AppComponent,
    Modal1Component,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ClosablealertComponent,
    CoursesComponent,
    ErrorComponent,
    ScrollbacktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
