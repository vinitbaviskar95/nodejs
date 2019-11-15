import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmpComponent } from './emp/emp.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    EmpComponent,
    EmplistComponent,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    ErrorComponent,
    HomeComponent,
    EditComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     {path: "", component: HomeComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "home", component: HomeComponent},
    {path: "emp", component: EmpComponent},
    {path: "emplist", component: EmplistComponent},
    {path: "employeelist", component: EmployeeListComponent},
    {path: "employeeregister", component: EmployeeRegisterComponent},
    {path: "edit/:No", component:EditComponent},
  
    {path: "**",component: ErrorComponent}
  ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
