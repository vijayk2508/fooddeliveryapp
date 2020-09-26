import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'services',
  //   component: ServicesComponent
  // }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
