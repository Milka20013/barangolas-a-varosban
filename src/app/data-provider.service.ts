import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  private teamId: number = -1;
  private inbetweenIndex: number = -1;
  public locationIndex: number = -1;

  public getTeamId(): number {
    if (this.teamId === -1) {
      let val = localStorage.getItem('teamId');
      if (val) {
        return +val;
      }
      return -1;
    }
    return this.teamId;
  }

  public getInbetweenIndex(): number {
    if (this.inbetweenIndex === -1) {
      let val = localStorage.getItem('inbetweenIndex');
      if (val) {
        return +val;
      }
      return -1;
    }
    return this.inbetweenIndex;
  }

  public setTeamId(id: number) {
    localStorage.setItem('teamId', id + '');
    this.teamId = id;
  }
  public setInbetweenIndex(index: number) {
    localStorage.setItem('inbetweenIndex', index + '');
    this.inbetweenIndex = index;
  }
  constructor() {}
}
