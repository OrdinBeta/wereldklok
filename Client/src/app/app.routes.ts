import { Routes } from '@angular/router';
import { ClocksComponent } from './clocks/clocks.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'clocks', component: ClocksComponent },
    { path: 'about', component: AboutComponent }
];
