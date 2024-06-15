import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  private document = inject(DOCUMENT);
  private localStorage;
  private teamId: number = -1;
  private inbetweenIndex: number = -1;
  public locationIndex: number = -1;

  constructor() {
    this.localStorage = this.document.defaultView!.localStorage;
  }

  public getTeamId(): number {
    if (this.teamId === -1) {
      let val = this.localStorage.getItem('teamId');
      if (val) {
        return +val;
      }
      return -1;
    }
    return this.teamId;
  }

  public getInbetweenIndex(): number {
    if (this.inbetweenIndex === -1) {
      let val = this.localStorage.getItem('inbetweenIndex');
      if (val) {
        return +val;
      }
      return -1;
    }
    return this.inbetweenIndex;
  }

  public setTeamId(id: number) {
    this.localStorage.setItem('teamId', id + '');
    this.teamId = id;
  }
  public setInbetweenIndex(index: number) {
    this.localStorage.setItem('inbetweenIndex', index + '');
    this.inbetweenIndex = index;
  }
}
