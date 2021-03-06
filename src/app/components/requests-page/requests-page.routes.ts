import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RequestsPageComponent } from './requests-page.component';

export const appRoutes: Routes = [
    { path: 'requests-page', component: RequestsPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class RequestsPageRoutes {}
