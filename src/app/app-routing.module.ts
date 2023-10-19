import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/views/pages/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'login',
    loadComponent() {
      return LoginComponent;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
