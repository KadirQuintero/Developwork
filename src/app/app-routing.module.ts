import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { usersComponent } from './users/users.component';
import { MPersonasComponent } from './personas/m-personas/m-personas.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { TeamsComponent } from './Equipos/teams/teams.component';
import { StatsComponent } from './stats/stats.component';
import { NotificationComponent } from './notification/notification.component';
import { registerComponent } from './register/register.component';
import { FormteamsComponent } from './formteams/formteams.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'user',
        component: usersComponent,
        children: [
          {
            path: 'personas',
            component: MPersonasComponent,
          },
          {
            path: 'register',
            component: registerComponent,
          },
          { path: 'nav', component: NavComponent },
          {
            path: 'teams',
            component: TeamsComponent,
            children: [{ path: 'formteam', component: FormteamsComponent }],
          },
          { path: 'stats', component: StatsComponent },
          { path: 'notification', component: NotificationComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
