import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserResolveService } from './user-resolve.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", 
    data: {
      noreload: true,
    },
    loadChildren: () => import("./admin/admin.module").then( (m) => m.AdminModule ) },
  { path: "login", component: LoginComponent, outlet: "popup" },
  { path: "users",
    canActivate: [ AuthGuard ],
    resolve: { 
      user: UserResolveService
     } ,
    data: {
      title: "Users",
      anotherParams: "Some value",
    },
    component: UsersComponent 
  },
  { path: "users/:userId", component: UserComponent, children: [
    { path: "profile", component: ProfileComponent },
    { path: "settings", component: SettingsComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
