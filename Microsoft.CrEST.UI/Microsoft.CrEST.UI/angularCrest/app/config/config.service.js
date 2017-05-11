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
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    ConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('../configMetadata/env.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (env_data) {
                _this._env = env_data;
                _this.http.get('../configMetadata/' + env_data.env + '.json')
                    .map(function (res) { return res.json(); })
                    .catch(function (error) {
                    console.error(error);
                    return Observable.throw(error.json().error || 'Server error');
                })
                    .subscribe(function (data) {
                    _this._config = data;
                    resolve(true);
                });
            });
        });
    };
    ConfigService.prototype.getEnv = function (key) {
        return this._env[key];
    };
    ConfigService.prototype.get = function (key) {
        console.log(this._config);
        return this._config[key];
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ConfigService);
export { ConfigService };
;
//# sourceMappingURL=config.service.js.map