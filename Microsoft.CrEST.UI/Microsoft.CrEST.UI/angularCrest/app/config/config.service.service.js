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
import { Config } from '../config/config';
var ConfigService = (function () {
    function ConfigService(_config) {
        var _this = this;
        this._config = _config;
        _config.load().then(function (x) {
            _this.apiBaseUrl = _config.get("apiBaseUri");
            _this.apiBaseUrlWithVersion = _this.apiBaseUrl + "/api/v1.0";
            _this.CONFIG = {
                apiLocations: {
                    baseUrl: _this.apiBaseUrl,
                    //getsow: this.apiBaseUrl + 'api/sow'
                    getsow: 'http://localhost:51221/sample.json'
                }
            };
        });
    }
    return ConfigService;
}());
ConfigService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Config])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map