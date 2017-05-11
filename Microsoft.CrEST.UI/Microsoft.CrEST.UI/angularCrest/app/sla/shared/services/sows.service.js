var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ConstantService } from '../../../config/constants.service';
var SowService = (function () {
    function SowService(_constantService, http) {
        this._constantService = _constantService;
        this.http = http;
        this.getSow = _constantService.CONFIG.apiLocations.getsow;
    }
    SowService.prototype.getSows = function () {
        return this.http.get(this.getSow)
            .map(function (res) { return res.json(); });
    };
    SowService.prototype.getSowById = function (id) {
        return this.http.get(this.getSowUrl(id))
            .map(function (res) { return res.json(); });
    };
    SowService.prototype.addSow = function (sow) {
        return this.http.post(this.getSow, JSON.stringify(sow))
            .map(function (res) { return res.json(); });
    };
    SowService.prototype.updateSow = function (sow) {
        return this.http.put(this.getSowUrl(sow.id), JSON.stringify(sow))
            .map(function (res) { return res.json(); });
    };
    SowService.prototype.deleteSow = function (id) {
        return this.http.delete(this.getSowUrl(id))
            .map(function (res) { return res.json(); });
    };
    SowService.prototype.getSowUrl = function (id) {
        return this.getSowUrl + "/" + id;
    };
    return SowService;
}());
SowService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConstantService, Http])
], SowService);
export { SowService };
//# sourceMappingURL=sows.service.js.map