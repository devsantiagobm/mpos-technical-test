import { Routes } from '@angular/router';
import { PurchaseLayoutComponent } from './features/purchase/layout/layout.component';
import { CategoryPageComponent } from './features/purchase/category/page/page.component';
import { CheckoutPageComponent } from './features/purchase/checkout/page/page.component';
import { PurchaseHomePageComponent } from './features/purchase/home/page/page.component';


export const routes: Routes = [
    {
        path: "home",
        component: PurchaseLayoutComponent,
        children: [
            {
                path: "",
                component: PurchaseHomePageComponent
            },
            {
                path: "category/:id",
                component: CategoryPageComponent
            },
            {
                path: "checkout",
                component: CheckoutPageComponent
            },
        ]
    },
    {
        path: "**",
        redirectTo: "home"
    }
];
