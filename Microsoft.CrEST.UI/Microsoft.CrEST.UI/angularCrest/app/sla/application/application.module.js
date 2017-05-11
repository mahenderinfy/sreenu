var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AutoCompleteComponent } from '../../shared/autocomplete/autocomplete.component';
import { UserFilterPipe } from '../../shared/pipe/userfilter.pipe';
import { SearchPipe } from '../../shared/pipe/search.pipe';
import { ApplicationService } from '../shared/services/application.service';
import { SlaApplicationComponent } from './application.component';
import { ApplicationFormComponent } from './application-form.component';
import { MyDatePickerModule } from 'mydatepicker';
var SlaApplicationModule = (function () {
    function SlaApplicationModule() {
    }
    return SlaApplicationModule;
}());
SlaApplicationModule = __decorate([
    NgModule({
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
    })
], SlaApplicationModule);
export { SlaApplicationModule };
//# sourceMappingURL=application.module.js.map