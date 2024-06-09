import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Question } from '../data';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input({ required: true }) question!: Question;
  @Output() onCorrectAnswer: EventEmitter<void> = new EventEmitter<void>();

  public isCorrectAnswer: boolean = false;
  public showIncorrectAnswerText: boolean = false;

  public currentAnswerIndex: number = 0;
  public currentAttempts: number = 0;
  public currentHelpIndex: number = -1;
  public isHelpEnabled = false;
  public displayedHelps: string[] = [];

  public answer: string = '';
  public initialStation: number = -1;
  public initialDestinationReached: boolean = false;

  public finalStationReached: boolean = false;

  public checkAnswer() {
    if (
      this.question.answer?.find(
        (x) => x.toLowerCase() === this.answer.toLowerCase()
      )
    ) {
      this.onCorrectAnswerSent();
    } else {
      this.onInCorrectAnswerSent();
    }
  }

  onCorrectAnswerSent() {
    this.currentAnswerIndex++;
    this.isCorrectAnswer = true;
    this.showIncorrectAnswerText = false;
    this.isHelpEnabled = false;
    this.displayedHelps = [];
    this.currentAttempts = 0;
  }

  onInCorrectAnswerSent() {
    this.incrementAttempts();
    if (this.shouldHideHelp()) {
      return;
    }
    this.showIncorrectAnswerText = true;
  }

  public shouldHideHelp(): boolean {
    return this.question.help?.length === this.displayedHelps.length;
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
    this.showIncorrectAnswerText = false;
    this.currentAttempts = 0;
    this.isHelpEnabled = false;
    if (!this.question.help) {
      return;
    }
    if (!this.question.help[this.currentHelpIndex]) {
      return;
    }
    this.displayedHelps.push(this.question.help[this.currentHelpIndex]);
  }

  public moveForward() {
    this.isCorrectAnswer = false;
    this.currentAnswerIndex++;
    this.answer = '';
    this.onCorrectAnswer.emit();
  }
}
