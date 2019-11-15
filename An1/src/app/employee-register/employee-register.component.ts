import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
import { RouterModule,Router} from '@angular/router';
@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
message;
  constructor(private service: EmployeeService, public Router : Router) 
  { }

  ngOnInit() {
  }

  Add(DataFromUI: any)
  {
    let resultstate=this.service.AddData(DataFromUI.form.value);
    resultstate.subscribe((data:any)=>{
      if(data.error==null)
      {
        this.message = "Record Inserted";
        this.Router.navigate(['/employeelist']);      }
      else
      {
        console.log(data);
        this.message = "Something Wrong";

      }
    });
  }
}
