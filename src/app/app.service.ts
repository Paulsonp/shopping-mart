import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {
  private themeValue = new Subject<any>();
  themelicked(message: string) {
    this.themeValue.next(message);
  }
  getMessage(): Observable<any> {
    return this.themeValue.asObservable();
  }
}
