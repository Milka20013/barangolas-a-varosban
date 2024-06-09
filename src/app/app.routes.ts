import { Routes } from '@angular/router';
import { LocationPageComponent } from './location-page/location-page.component';
import { InbetweenStationsComponent } from './inbetween-stations/inbetween-stations.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { JunkyardComponent } from './junkyard/junkyard.component';

export const routes: Routes = [
  {
    path: 'location/:id',
    component: LocationPageComponent,
  },
  {
    path: 'inbetween/:id',
    component: InbetweenStationsComponent,
  },
  {
    path: 'kuka',
    component: JunkyardComponent,
  },
  {
    path: '**',
    component: WelcomePageComponent,
  },
];
