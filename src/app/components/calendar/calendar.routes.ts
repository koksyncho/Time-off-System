import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar.component';

export const appRoutes: Routes = [
    { path: 'calendar', component: CalendarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class CalendarRoutes {}
