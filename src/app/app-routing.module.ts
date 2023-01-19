import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, //A URL to redirect to when the path matches. 'full' is important to do this when redirecting empty-path routes.  Otherwise, because an empty path is a prefix of any URL (prefix is default), the router would apply the redirect even when navigating to the redirect destination, creating an endless loop.
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie/:type/:id', component: MovieComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
