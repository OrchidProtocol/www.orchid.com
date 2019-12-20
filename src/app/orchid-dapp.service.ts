import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrchidDappService {

  constructor() { }

  hasWeb3Browser(): Observable<boolean> {
    return of(false).pipe(delay(500));
  }
  hasFundsAvailable(): Observable<boolean> {
    return of(false).pipe(delay(1000));
  }
  hasAccountConfigured(): Observable<boolean> {
    return of(false).pipe(delay(1500));
  }
}
