import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GastosComponent } from './pages/gastos/gastos.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: 'gastos',
        component: GastosComponent
    }
];
