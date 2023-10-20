import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TransportOperatorsComponent } from '../transport-operators/transport-operators.component';
import { ActionCenterComponent } from '../action-center/action-center.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      //Insert children component here (for nav)
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
