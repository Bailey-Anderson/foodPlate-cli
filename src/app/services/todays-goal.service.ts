import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TodaysGoalService {
  private subject = new Subject<any>();

  sendGoal(goal: string): void {
    this.subject.next(goal);
    console.log(goal);
  }

  clearGoal(): void {
    this.subject.next();
  }

  getGoal(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
