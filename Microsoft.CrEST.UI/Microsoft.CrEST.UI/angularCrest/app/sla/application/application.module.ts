import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AutoCompleteComponent } from '../../shared/autocomplete/autocomplete.component'
import { UserFilterPipe } from '../../shared/pipe/userfilter.pipe';
import { SearchPipe } from '../../shared/pipe/search.pipe';
import { ApplicationService } from '../shared/services/application.service';

import { SlaApplicationComponent } from './application.component';
import { ApplicationFormComponent } from './application-form.component';
import { MyDatePickerModule } from 'mydatepicker'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MyDatePickerModule
    ],
    declarations: [
        SlaApplicationComponent, ApplicationFormComponent, UserFilterPipe, AutoCompleteComponent, SearchPipe 
    ],
    
    providers: [ApplicationService]
     //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlaApplicationModule { }
