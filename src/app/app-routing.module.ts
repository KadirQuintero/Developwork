import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { usersComponent } from './users/users.component';
import { registerComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { StatsComponent } from './stats/stats.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent, // Utiliza AppComponent como el componente principal
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user', component: usersComponent },
      { path: 'register', component: registerComponent},
      { path: 'nav', component: NavComponent},
      { path: 'teams', component: TeamsComponent},
      { path: 'stats', component: StatsComponent},
      { path: 'notification', component: NotificationComponent},
      // Otras rutas aquí
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
