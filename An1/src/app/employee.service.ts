import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }
 
  DeleteData(No)
  {
    return this.http.delete("http://35.154.148.155:4000/employees/" + No);
  }
  GetData()
  {
    return this.http.get("http://35.154.148.155:4000/employees");
  }
  AddData(empObject)
  {
    return this.http.post("http://35.154.148.155:4000/employees",empObject);
  }
  GetDataByID(No)
  {
    return this.http.get("http://35.154.148.155:4000/employees/" + No);
  }
  UpdateData(empObject)
  {
    console.log(empObject);
    return this.http.put("http://35.154.148.155:4000/employees/" + empObject.No,empObject);
  }
}
