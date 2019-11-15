import {Component} from '@angular/core';

@Component({
    selector:'app-aboutus',
    templateUrl:'./aboutus.component.html',
    styleUrls:['./aboutus.component.css']

})
export class AboutusComponent
{
    info = {"Name":"Vinit",
    "Course":"DAC",
    "Prn":"102839839"
    };
}