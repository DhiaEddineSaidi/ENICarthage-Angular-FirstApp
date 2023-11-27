import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { PersonComponent } from './back-end-communication/person/person.component';

const routes: Routes = [
  { path: 'home', title: 'HOME', component: HomeComponent },
  { path: 'login', title: 'LOGIN', component: LoginComponent },
  {
    path: 'communication', component: ParentComponent, children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  { path: 'backendcommunication', component: PersonComponent },
  { path: 'databinding', title: 'DataBinding', loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', title: 'PAGE NOT FOUND', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
