import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { HistoryComponent } from './history/history.component';
import { GiftComponent } from './gift/gift.component';
import { ArchwizardModule } from 'ng2-archwizard';
import { CashierComponent } from './cashier/cashier.component';
import { PanelComponent } from './panel/panel.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    HistoryComponent,
    GiftComponent,
    CashierComponent,
    PanelComponent,
    AdminComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ArchwizardModule,
  ],
  providers: [
    AuthGuard,
    ShoppingCartService,
    ProductService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
