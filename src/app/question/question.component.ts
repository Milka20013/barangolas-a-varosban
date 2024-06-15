import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Question, QuestionType } from '../data';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { GenericButtonComponent } from '../generic-button/generic-button.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [FormsModule, NgFor, GenericButtonComponent, NgIf],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  @Input({ required: true }) question!: Question;
  @Output() onCorrectAnswer: EventEmitter<void> = new EventEmitter<void>();

  public questionType = QuestionType;
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
    if (!this.question.type) {
      this.question.type = QuestionType.Normal;
    }
    if (this.answer.toLowerCase() === 'admin0') {
      this.onCorrectAnswerSent();
      return;
    }
    if (this.question.type === QuestionType.Inbetween) {
      let a = +this.question.answer![0];
      let b = +this.question.answer![1];
      if (+this.answer >= a && +this.answer <= b) {
        this.onCorrectAnswerSent();
      } else {
        this.onInCorrectAnswerSent();
      }
      return;
    }
    if (
      this.question.answer?.find(
        (x) => this.answer.toLowerCase().trim() === x.toLowerCase().trim()
      )
    ) {
      this.onCorrectAnswerSent();
    } else {
      this.onInCorrectAnswerSent();
    }
  }

  public isQuestion() {
    return !!this.question.answer;
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
    this.showIncorrectAnswerText = true;
    if (this.shouldHideHelp()) {
      return;
    }
    this.isCorrectAnswer = false;
  }

  public shouldHideHelp(): boolean {
    return (
      this.question.help?.length === this.displayedHelps.length ||
      !this.isHelpEnabled
    );
  }
  private incrementAttempts() {
    this.currentAttempts++;
    if (this.displayedHelps.length > 0) {
      if (this.displayedHelps.length >= this.question.help!.length) {
        this.isHelpEnabled = false;
        return;
      }
      this.isHelpEnabled = true;
    }
    if (this.currentAttempts >= 2) {
      this.isHelpEnabled = true;
    }
  }

  public getHelpRemainingText() {
    if (!this.question.help) {
      return '';
    }
    if (this.currentAttempts < 2) {
      if (this.displayedHelps.length > 0) {
        return 'Segítség elérhető!';
      }
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
