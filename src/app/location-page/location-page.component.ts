import { Component } from '@angular/core';
import * as db from './data';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.css',
})
export class LocationPageComponent {
  public locationDatas = db.locationDatas;
  public initialDescriptions = db.initialDescriptions;
  public paths = db.paths;

  public isCorrectAnswer: boolean = false;
  public showIncorrectAnswerText: boolean = false;

  public currentAnswerIndex: number = 0;
  public currentAttempts: number = 0;
  public currentHelpIndex: number = -1;
  public isHelpEnabled = false;
  public helps: string[] = [];

  public answer: string = '';
  public initialStation: number = -1;
  public initialDestinationReached: boolean = false;

  public finalStationReached: boolean = false;

  public checkAnswer() {
    let locationData = this.getCurrentLocationData();
    if (locationData?.answer === this.answer) {
      this.onCorrectAnswerSent();
    } else {
      this.incrementAttempts();
      this.showIncorrectAnswerText = true;
      setTimeout(() => {
        this.showIncorrectAnswerText = false;
      }, 5000);
    }
  }

  onCorrectAnswerSent() {
    let path = this.getPathForGroup();
    if (!path) {
      return;
    }
    this.isCorrectAnswer = true;
    this.showIncorrectAnswerText = false;
    this.isHelpEnabled = false;
    this.helps = [];
    this.currentAttempts = 0;
    if (this.currentAnswerIndex >= path?.path.length) {
      this.finalStationReached = true;
    }
  }

  private incrementAttempts() {
    this.currentAttempts++;
    if (this.currentAttempts >= 2) {
      this.isHelpEnabled = true;
    }
  }

  public getHelpRemainingText() {
    if (this.currentAttempts < 2) {
      return `A következő rossz válasz után segítség érhető el.`;
    }
    return 'Segítség elérhető!';
  }
  public getHelp() {
    if (!this.isHelpEnabled) {
      return;
    }
    this.currentHelpIndex++;
    let locationData = this.getCurrentLocationData();
    if (!locationData) {
      this.currentAnswerIndex--;
      return;
    }
    this.showIncorrectAnswerText = false;
    this.currentAttempts = 0;
    this.isHelpEnabled = false;
    this.helps.push(locationData?.helps[this.currentHelpIndex]);
  }

  public moveForward() {
    this.isCorrectAnswer = false;
    this.currentAnswerIndex++;
    this.answer = '';
  }

  public setInitialStation() {
    let value = (document.getElementById('initialStation') as HTMLInputElement)
      .value;
    if (!value) {
      value = '-1';
    }
    let num = +value;
    if (!this.checkIfGroupExists(num)) {
      return;
    }
    this.initialStation = num;
  }

  public getInitialDescription() {
    return this.initialDescriptions.find((x) => x.id === this.initialStation)
      ?.description;
  }

  public getCurrentLocationData() {
    let path = this.getPathForGroup();
    let locationData = this.locationDatas.find(
      (x) => x.id === path?.path[this.currentAnswerIndex]
    );
    return locationData;
  }
  public getCurrentQuestion() {
    let locationData = this.getCurrentLocationData();
    return locationData?.description;
  }

  public getPathForGroup() {
    return this.paths.find((x) => x.initialStation === this.initialStation);
  }

  checkIfGroupExists(value: number): boolean {
    let guard: number[] = this.arrayRange(0, this.locationDatas.length, 1);
    if (!guard.includes(+value)) {
      return false;
    }
    return true;
  }
  arrayRange(start: number, stop: number, step: number) {
    return Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  }
}
