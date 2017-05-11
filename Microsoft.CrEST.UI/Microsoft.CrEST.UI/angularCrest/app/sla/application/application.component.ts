import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Application } from "../shared/models/application";
import { ApplicationService } from "./../shared/services/application.service";
@Component({
    selector: 'sla-application',
    template: require('./application.component.html'),
})
export class SlaApplicationComponent {
    
    sla_application: "Sla Application";
    public contactId = '';
    public serviceLine = '';
    public application = '';
    public id: string;
    public states: any = [];

    public contactdetails: string[] = [];
    public contactIdList: string[] = [];
    public servicelineList: string[] = [];
    public ApplicationLists: string[] = [];
    public applicationList: Application[] = [];
    router: Router;
    constructor(private http: Http, _router: Router, private applicationService: ApplicationService) {
        this.router = _router;
       
    }
    

    ngOnInit() {
        this.applicationList = [];
        this.applicationService.getApplications()
            .subscribe(data => {
                this.applicationList = data
                if (this.applicationList) {
                    this.autoComplete();
                }
            });
       
    }
    

    public filteredList: string[] = [];
    public ContactIdList: string[] = [];
    public searchContactId = '';
    public searchServiceLine = '';
    public searchApplication = '';
    find() {
        
        this.searchContactId = this.contactId.trim();
        this.searchServiceLine = this.serviceLine.trim();
        this.searchApplication = this.application.trim();
    }


    //edit(id: any) {
    //    alert(id + "the value should be")

    //    this.id = id;
    //    this.router.navigate(['/applications', this.id]);
    //}
    notifyContactId(ContactId: string) {
        if (event) {
            this.contactId = ContactId;
        }
    }


    notifyServiceLine(serviceLine: string) {
        if (event) {
            this.serviceLine = serviceLine;
        }
    }

    notifyApplication(Application: string) {
        if (event) {
            this.application = Application;
        }
    }

    autoComplete() {
        for (var i = 0; i < this.applicationList.length; i++) {
            this.ApplicationLists.push(this.applicationList[i].application);
            this.contactIdList.push(this.applicationList[i].contactId);
            this.servicelineList.push(this.applicationList[i].serviceLine);
        }
    }

}

