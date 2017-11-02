import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserPageComponent } from './user-page.component';

export const appRoutes: Routes = [
    { path: 'user-page', component: UserPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class UserPageRoutes {}
