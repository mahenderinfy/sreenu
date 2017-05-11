import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    pageContent: String = "This is one stop application for CrEST PMO Tool";
}