import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './account/profile/profile.component';
import { CompositionComponent } from './compositions/composition/composition.component';
import { EventComponent } from './events/event/event.component';

const routes: Routes = [
  { path: ':userName', component: ProfileComponent },
  { path: 'compositions/:compositionId', component: CompositionComponent },
  { path: 'events/:eventId', component: EventComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
