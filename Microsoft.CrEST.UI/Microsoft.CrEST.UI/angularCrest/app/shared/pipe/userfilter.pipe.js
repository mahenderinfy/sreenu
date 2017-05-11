var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../autocomplete/autocomplete.component.ts" />
import { Pipe } from '@angular/core';
var UserFilterPipe = (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (value, args) {
        if (args !== '') {
            return value.filter(function (value) {
                return (value.toLowerCase().indexOf(args.toLowerCase()) !== -1);
            });
        }
    };
    return UserFilterPipe;
}());
UserFilterPipe = __decorate([
    Pipe({
        name: 'filterUser'
    })
], UserFilterPipe);
export { UserFilterPipe };
//# sourceMappingURL=userfilter.pipe.js.map