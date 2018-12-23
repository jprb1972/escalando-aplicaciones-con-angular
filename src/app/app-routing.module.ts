import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';

import { PageNotFoundComponent } from './modules/core';
import { LoginComponent, AuthGuard } from './modules/login';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'usermanager',
    loadChildren: './pages/usermanager/usermanager.module#UsermanagerModule',
  },
  {
    path: 'admin',
    loadChildren: './pages/usermanager/usermanager.module#UsermanagerModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
