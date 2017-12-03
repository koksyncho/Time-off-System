import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SingleRequestPageComponent } from './single-request-page.component';

export const appRoutes: Routes = [
    { path: 'single-request-page', component: SingleRequestPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class SingleRequestPageRoutes {}
