import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { MyDatePickerModule } from 'mydatepicker';
import { IMyOptions } from 'mydatepicker';
import { IMyDateModel } from 'mydatepicker';



@Component({
    selector: 'sla-applicationForm',
    template: require('./application-form.component.html'),
})
export class ApplicationFormComponent {

    public route: ActivatedRoute;
    constructor(private _route: ActivatedRoute) {
        this.route = _route;


    }

    onDateChanged(event: IMyDateModel) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    }
    private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
    private model: Object = { date: { year: 2018, month: 10, day: 9 } };
    ngOnInit() {


        //called after the constructor and called  after the first ngOnChanges() 
        if (this.route.snapshot.params['id'] != null) {
            //alert(this.route.snapshot.params['id']);
        }
    }

}