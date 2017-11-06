import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SingleRequestComponent } from './single-request.component';

export const appRoutes: Routes = [
    { path: 'single-request', component: SingleRequestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class SingleRequestRoutes {}
