import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit 
{
  message;
  emp ={
    "No": 0,
    "Name": "",
    "Address": ""
};

  constructor(public routes:ActivatedRoute,  public service: EmployeeService, public router:Router)
     {
       this.message="";
      }

  ngOnInit() 
  {
    let parmeterArrivalStatus = this.routes.paramMap;
    parmeterArrivalStatus.subscribe((params)=>
    {
      let No = params.get("No");

      let StatusofEmpSearched = this.service.GetDataByID(No);

      StatusofEmpSearched.subscribe((result: any)=>{

        if(result.length>0)
        {
          this.emp = result[0];
          this.message = "Record Found!"; 
        }
        else
        {
          this.message = "Record Not Found";
        }
        });
    });
  }
  
  Update()
  {
    let statusofUpdate = this.service.UpdateData(this.emp);
    statusofUpdate.subscribe((result:any)=>{
      if(result.affectedRows > 0)
      {
        this.router.navigate(['home']);
      }
      else
      {
        this.message = "Something Went Wrong";
      }
    });
  }
}

