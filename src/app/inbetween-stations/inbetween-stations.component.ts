import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import { InbetweenQuestion, inbetweenQuestions } from './inbetween.data';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-inbetween-stations',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './inbetween-stations.component.html',
  styleUrl: './inbetween-stations.component.css',
})
export class InbetweenStationsComponent implements OnInit {
  question!: InbetweenQuestion;
  index!: number;
  route = inject(ActivatedRoute);
  router = inject(Router);

  dataService = inject(DataProviderService);

  constructor() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngOnInit(): void {
    let i = this.route.snapshot.paramMap.get('id');
    if (!i) {
      console.log('Nincs ID');
      return;
    }
    this.index = +i;
    this.question = inbetweenQuestions.find((x) => x.id === this.index)!;
    console.log(this.question);
  }

  onCorrectAnswer() {
    if (this.question.locationId) {
      this.router.navigate(['location/' + this.question.locationId]);
      return;
    }
    this.index++;
    this.dataService.setInbetweenIndex(this.index);
    this.router.navigate(['inbetween/' + this.index]);
  }
}
