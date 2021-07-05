import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { APP_BASE_HREF } from '@angular/common';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { PagePricingComponent } from './page-pricing/page-pricing.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageHomeComponent } from './page-home/page-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    NavigationComponent,
    FooterComponent,
    PageServicesComponent,
    PageAboutComponent,
    PageProductsComponent,
    PagePricingComponent,
    PageContactComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
