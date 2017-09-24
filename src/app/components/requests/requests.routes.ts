import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RequestsComponent } from './requests.component';

export const appRoutes: Routes = [
    { path: 'requests', component: RequestsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class RequestsRoutes {}
