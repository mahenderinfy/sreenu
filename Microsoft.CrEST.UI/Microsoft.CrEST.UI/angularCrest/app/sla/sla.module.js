var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SowModule } from "./sow/sow.module";
import { SlaServiceModule } from "./serviceline/serviceline.module";
import { SlaApplicationModule } from "./application/application.module";
import { SlpModule } from "./slp/slp.module";
import { SlaRouting } from "./sla.routing";
var SlaModule = (function () {
    function SlaModule() {
    }
    return SlaModule;
}());
SlaModule = __decorate([
    NgModule({
        imports: [SowModule, SlaServiceModule, SlaApplicationModule, SlpModule, SlaRouting],
    })
], SlaModule);
export { SlaModule };
//# sourceMappingURL=sla.module.js.map