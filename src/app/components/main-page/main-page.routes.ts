import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: MainPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class MainPageRoutes {}
