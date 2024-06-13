import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass, NgStyle],
  styleUrls: ['./generic-button.component.css'],
})
export class GenericButtonComponent {
  @Input() Action?: (() => any | void) | (() => Promise<void | void>);
  @Output() OnClick = new EventEmitter<any>();

  public isLoading: boolean = false;

  @Input() disabled: boolean = false;
  @Input() background: string = 'var(--primary-color)';

  constructor() {}

  CallAction() {
    if (!this.Action) return;

    let result =
      typeof this.Action === 'function' ? this.Action() : this.Action;
    if (typeof result?.then === 'function') {
      this.isLoading = true;
      result.then(() => {
        this.isLoading = false;
      });
    }
  }

  async CallClick() {
    if (this.disabled) return;
    await this.CallAction();
    this.OnClick.emit();
  }
}
