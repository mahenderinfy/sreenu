import { Component, OnInit } from '@angular/core';
import { SowService } from "../../shared/services/sows.service";
import { Sow } from "../../shared/models/sow";

@Component({
    selector: 'sow-grid',
    templateUrl: './sow.component.html',
})

export class SowComponent {
    private sows: Sow[] = [];

    constructor(private sowService: SowService) { }

    ngOnInit() {
        this.sowService.getSows()
            .subscribe(data => this.sows = data);
    }

    deleteSow(sow: any) {
        if (confirm("Are you sure you want to delete " + sow.name + "?")) {
            var index = this.sows.indexOf(sow);
            this.sows.splice(index, 1);

            this.sowService.deleteSow(sow.id)
                .subscribe(null,
                err => {
                    alert("Could not delete sow.");
                    // Revert the view back to its original state
                    this.sows.splice(index, 0, sow);
                });
        }
    }
}