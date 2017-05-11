import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ConstantService } from '../../../config/constants.service'

@Injectable()
export class ApplicationService {

    public getApplication: string;

    constructor(private _constantService: ConstantService, private http: Http) {
        this.getApplication = _constantService.CONFIG.apiLocations.getApplication;
    }

    getApplications() {
        return this.http.get(this.getApplication)
            .map(res => res.json());
    }

    //getSowById(id: any) {
    //    return this.http.get(this.getSowUrl(id))
    //        .map(res => res.json());
    //}


    //addSow(sow: any) {
    //    return this.http.post(this.getSow, JSON.stringify(sow))
    //        .map(res => res.json());
    //}

    //updateSow(sow: any) {
    //    return this.http.put(this.getSowUrl(sow.id), JSON.stringify(sow))
    //        .map(res => res.json());
    //}

    //deleteSow(id: any) {
    //    return this.http.delete(this.getSowUrl(id))
    //        .map(res => res.json());
    //}

    //private getSowUrl(id: any) {
    //    return this.getSowUrl + "/" + id;
    //}
}



