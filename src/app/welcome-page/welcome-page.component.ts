import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeamPaths } from '../data';
import { DataProviderService } from '../data-provider.service';
import { FormsModule } from '@angular/forms';
import { GenericButtonComponent } from '../generic-button/generic-button.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FormsModule, GenericButtonComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export class WelcomePageComponent {
  router = inject(Router);
  teamId: number = 1;

  teamPaths = TeamPaths;

  dataProvider = inject(DataProviderService);

  public registerTeam() {
    if (!this.teamPaths.map((x) => x.teamId).includes(this.teamId)) {
      return;
    }
    this.dataProvider.setTeamId(this.teamId);
    this.router.navigate([
      'inbetween' +
        '/' +
        this.teamPaths.find((x) => x.teamId === this.teamId)?.inbetweenIds[0],
    ]);
  }
}
