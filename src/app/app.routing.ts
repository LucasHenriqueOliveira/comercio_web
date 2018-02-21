import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { MenuComponent } from './menu/menu.component';
import { HistoryComponent } from './history/history.component';
import { GiftComponent } from './gift/gift.component';
import { CashierComponent } from './cashier/cashier.component';
import { PanelComponent } from './panel/panel.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'gift', component: GiftComponent },
    { path: 'cashier', component: CashierComponent },
    { path: 'panel', component: PanelComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
