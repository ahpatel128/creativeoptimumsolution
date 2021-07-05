import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PagePricingComponent } from './page-pricing/page-pricing.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  {path: '', component: PageHomeComponent},
{ path: 'services', component: PageServicesComponent },
{ path: 'about', component: PageAboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
