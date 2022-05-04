import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePricingComponent } from './page-pricing/page-pricing.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { SPageWebDevComponent } from './s-page-web-dev/s-page-web-dev.component';
import { SPageDesignComponent } from './s-page-design/s-page-design.component';
import { SPageIntegrationComponent } from './s-page-integration/s-page-integration.component';
import { SPageDataComponent } from './s-page-data/s-page-data.component';
import { PPageEComComponent } from './p-page-e-com/p-page-e-com.component';



const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'services', component: PageServicesComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'Contact', component: PageContactComponent },
  { path: 'pricing', component: PagePricingComponent },
  { path: 'products', component: PageProductsComponent },
  { path: 'webdevelopment', component: SPageWebDevComponent },
  { path: 'webdesign', component: SPageDesignComponent },
  { path: 'apiintegration', component: SPageIntegrationComponent },
  { path: 'dataservices', component: SPageDataComponent },
  { path: 'Product-Ecommerce', component: PPageEComComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
