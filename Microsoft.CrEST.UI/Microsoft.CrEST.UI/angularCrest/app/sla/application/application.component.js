var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ApplicationService } from "./../shared/services/application.service";
var SlaApplicationComponent = (function () {
    function SlaApplicationComponent(http, _router, applicationService) {
        this.http = http;
        this.applicationService = applicationService;
        this.contactId = '';
        this.serviceLine = '';
        this.application = '';
        this.states = [];
        this.contactdetails = [];
        this.contactIdList = [];
        this.servicelineList = [];
        this.ApplicationLists = [];
        this.applicationList = [];
        this.filteredList = [];
        this.ContactIdList = [];
        this.searchContactId = '';
        this.searchServiceLine = '';
        this.searchApplication = '';
        this.router = _router;
    }
    SlaApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applicationList = [];
        this.applicationService.getApplications()
            .subscribe(function (data) {
            _this.applicationList = data;
            if (_this.applicationList) {
                _this.autoComplete();
            }
        });
    };
    SlaApplicationComponent.prototype.find = function () {
        this.searchContactId = this.contactId.trim();
        this.searchServiceLine = this.serviceLine.trim();
        this.searchApplication = this.application.trim();
    };
    //edit(id: any) {
    //    alert(id + "the value should be")
    //    this.id = id;
    //    this.router.navigate(['/applications', this.id]);
    //}
    SlaApplicationComponent.prototype.notifyContactId = function (ContactId) {
        if (event) {
            this.contactId = ContactId;
        }
    };
    SlaApplicationComponent.prototype.notifyServiceLine = function (serviceLine) {
        if (event) {
            this.serviceLine = serviceLine;
        }
    };
    SlaApplicationComponent.prototype.notifyApplication = function (Application) {
        if (event) {
            this.application = Application;
        }
    };
    SlaApplicationComponent.prototype.autoComplete = function () {
        for (var i = 0; i < this.applicationList.length; i++) {
            this.ApplicationLists.push(this.applicationList[i].application);
            this.contactIdList.push(this.applicationList[i].contactId);
            this.servicelineList.push(this.applicationList[i].serviceLine);
        }
    };
    return SlaApplicationComponent;
}());
SlaApplicationComponent = __decorate([
    Component({
        selector: 'sla-application',
        template: require('./application.component.html'),
    }),
    __metadata("design:paramtypes", [Http, Router, ApplicationService])
], SlaApplicationComponent);
export { SlaApplicationComponent };
//# sourceMappingURL=application.component.js.map