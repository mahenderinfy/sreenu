import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Sow } from '../../shared/models/sow';
import { SowService } from '../../shared/services/sows.service';

@Component({
    selector: 'sow-form',
    templateUrl: './sow-form.component.html'
})

export class SowFormComponent implements OnInit {

    form: FormGroup;
    title: string;
    sow: Sow = new Sow();

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private SowService: SowService
    ) {
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

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var id = params['id'];

            this.title = id ? 'Edit Sow' : 'New Sow';

            if (!id)
                return;

            this.SowService.getSowById(id)
                .subscribe(
                sow => this.sow = sow,
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    save() {
        var result,
            sowValue = this.form.value;

        if (sowValue.id) {
            result = this.SowService.updateSow(sowValue);
        } else {
            result = this.SowService.addSow(sowValue);
        }

        result.subscribe(data => this.router.navigate(['sows']));
    }
}
