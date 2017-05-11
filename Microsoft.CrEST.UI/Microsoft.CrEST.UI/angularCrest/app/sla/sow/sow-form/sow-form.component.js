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
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Sow } from '../../shared/models/sow';
import { SowService } from '../../shared/services/sows.service';
var SowFormComponent = (function () {
    function SowFormComponent(formBuilder, router, route, SowService) {
        this.router = router;
        this.route = route;
        this.SowService = SowService;
        this.sow = new Sow();
        this.form = formBuilder.group({
            name: ['', [
                    Validators.required,
                    Validators.minLength(3)
                ]],
            email: ['', [
                    Validators.required
                ]],
            phone: [],
            address: formBuilder.group({
                street: ['', Validators.minLength(3)],
                suite: [],
                city: ['', Validators.maxLength(30)],
                zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
            })
        });
    }
    SowFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Edit Sow' : 'New Sow';
            if (!id)
                return;
            _this.SowService.getSowById(id)
                .subscribe(function (sow) { return _this.sow = sow; }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    SowFormComponent.prototype.save = function () {
        var _this = this;
        var result, sowValue = this.form.value;
        if (sowValue.id) {
            result = this.SowService.updateSow(sowValue);
        }
        else {
            result = this.SowService.addSow(sowValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['sows']); });
    };
    return SowFormComponent;
}());
SowFormComponent = __decorate([
    Component({
        selector: 'sow-form',
        templateUrl: './sow-form.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Router,
        ActivatedRoute,
        SowService])
], SowFormComponent);
export { SowFormComponent };
//# sourceMappingURL=sow-form.component.js.map