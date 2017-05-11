import { Routes, RouterModule } from '@angular/router';

import { SowComponent } from './sow/landing/sow.component';
import { SowFormComponent } from './sow/sow-form/sow-form.component';

import { SlaApplicationComponent } from './application/application.component';
import { ApplicationFormComponent } from './application/application-form.component';

import { SlaServiceComponent } from './serviceline/serviceline.component';
import { SlpComponent } from './slp/slp.component';


const slaRoutes: Routes = [
    { path: 'sows', component: SowComponent, pathMatch: 'full' },
    { path: 'sows/add', component: SowFormComponent },
    { path: 'sows/:id', component: SowFormComponent },

    { path: 'applications', component: SlaApplicationComponent, pathMatch: 'full' },
    { path: 'applications/add', component: SlaApplicationComponent },
    { path: 'applications/:id', component: ApplicationFormComponent },

    { path: 'services', component: SlaServiceComponent, pathMatch: 'full' },
    { path: 'services/add', component: SlaServiceComponent },
    { path: 'services/:id', component: SlaServiceComponent },

    { path: 'slps', component: SlpComponent, pathMatch: 'full' },
    { path: 'slps/add', component: SlpComponent },
    { path: 'slps/:id', component: SlpComponent },
]

export const SlaRouting = RouterModule.forChild(slaRoutes);