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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    HistoryComponent,
    GiftComponent
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
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
