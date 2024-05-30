import { Component } from '@angular/core';
import { locationDatas } from './data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.css',
})
export class LocationPageComponent {
  public data = locationDatas;
  public isCorrectAnswer: boolean = false;
  public currentAnswerIndex: number = 0;

  public answer: string = '';
  public checkAnswer() {
    console.log(this.answer);
    if (this.data[this.currentAnswerIndex].answer === this.answer) {
      this.isCorrectAnswer = true;
    }
  }

  public moveForward() {
    if (this.data[this.currentAnswerIndex].answer === this.answer) {
      this.isCorrectAnswer = false;
      this.currentAnswerIndex++;
      this.answer = '';
      if (this.currentAnswerIndex >= this.data.length) {
        this.currentAnswerIndex = 0;
      }
    }
  }
}
