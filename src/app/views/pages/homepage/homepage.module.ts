import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { HomePageRoutingModule } from './homepage-routing.module';
import { NgFor } from '@angular/common';

@NgModule({
  imports: [HomePageRoutingModule, NgFor],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
