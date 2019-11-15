import {Component} from '@angular/core';

@Component({
    selector:'app-emplist',
    templateUrl:'./emplist.component.html',
    styleUrls:['./emplist.component.css']
})

export class EmplistComponent
{
 emps = [];

 constructor(){
     this.emps = 
    [
     {"No":1, "Name":"Vinit","Place":"Nashik"},
     {"No":2, "Name":"Vinit1","Place":"Nashik1"},
     {"No":3, "Name":"Vinit2","Place":"Nashik2"}
];}

doSomething()
{
    this.emps.push({"No":4,"Name":"Deepika","Place":"MP"});
//this.emps.splice(0,1);
}
}