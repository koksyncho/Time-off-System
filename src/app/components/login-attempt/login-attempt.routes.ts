import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginAttemptComponent } from './login-attempt.component';

export const appRoutes: Routes = [
    { path: 'login-attempt', component: LoginAttemptComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class LoginAttemptRoutes {}
