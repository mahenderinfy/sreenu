var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { ConfigService, ConstantService } from './shared/shared';
import { SlaModule } from "./sla/sla.module";
import { Routing } from './app.routing';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, HttpModule, SlaModule, Routing],
        declarations: [AppComponent, HomeComponent, NavigationComponent, NotFoundComponent],
        bootstrap: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            ConfigService, ConstantService,
            {
                provide: APP_INITIALIZER,
                useFactory: function (config) { return function () { return config.load(); }; },
                deps: [ConfigService],
                multi: true
            }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map