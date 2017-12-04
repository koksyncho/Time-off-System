import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RequestCreationComponent } from './request-creation.component';

export const appRoutes: Routes = [
    { path: 'request-creation', component: RequestCreationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class RequestCreationRoutes {}
