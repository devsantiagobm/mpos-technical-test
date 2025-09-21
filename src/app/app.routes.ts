import { Routes } from '@angular/router';
import { PurchaseLayoutComponent } from './features/purchase/layout/layout.component';
import { CategoryPageComponent } from './features/purchase/category/page/page.component';

// TODO: DIVIDIR LAS ROUTES POR CAPA DE NEGOCIO
export const routes: Routes = [
    {
        path: "home",
        component: PurchaseLayoutComponent,
        children: [
            {
                path: "category/:id",
                component: CategoryPageComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
