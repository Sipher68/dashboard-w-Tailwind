import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TransportOperatorsComponent } from '../transport-operators/transport-operators.component';
import { ActionCenterComponent } from '../action-center/action-center.component';
import { PaoComponent } from '../pao/pao.component';
import { DriverComponent } from '../driver/driver.component';
import { BlacklistComponent } from '../blacklist/blacklist.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      //Insert children component here (for nav)
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'transport-operators',
        component: TransportOperatorsComponent,
      },
      {
        path: 'action-center',
        component: ActionCenterComponent,
      },
      {
        path: 'pao',
        component: PaoComponent,
      },
      {
        path: 'driver',
        component: DriverComponent,
      },
      {
        path: 'blacklist',
        component: BlacklistComponent,
      },
      {
        path: 'profile',
        component: MyProfileComponent,
      },
      {
        path: 'profile-card',
        component: ProfileCardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
