import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { LocationData, LocationDatas } from './location.data';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import { DataProviderService } from '../data-provider.service';
import { getNextInbetweenId } from '../data';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [FormsModule, NgFor, QuestionComponent],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.css',
})
export class LocationPageComponent implements OnInit {
  public locationData: LocationData = LocationDatas[0];
  public questionIndex: number = 0;
  router = inject(Router);
  route = inject(ActivatedRoute);

  dataService = inject(DataProviderService);

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      console.log('NINCS ID');
      return;
    }
    this.locationData = LocationDatas.find((x) => x.id === +id!)!;
  }

  public onCorrectAnswerSent() {
    this.questionIndex++;
    if (this.locationData.questions.length === this.questionIndex) {
      this.router.navigate([
        'inbetween/' +
          getNextInbetweenId(
            this.dataService.getTeamId(),
            this.dataService.getInbetweenIndex()
          ),
      ]);
      return;
    }
  }
}
