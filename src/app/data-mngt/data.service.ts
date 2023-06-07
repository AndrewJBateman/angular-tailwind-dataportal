import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IPharmaData } from './pharma.data';
import { State } from './state.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3000';

  data: Signal<State<Array<IPharmaData>> | State<null> | undefined> = toSignal(
    this.loadData()
  );

  constructor(private http: HttpClient) {}

  loadData(): Observable<State<Array<IPharmaData>> | State<null>> {
    return this.http.get<Array<IPharmaData>>(`${this.baseUrl}/api`).pipe(
      map((data) => {
        return new State<Array<IPharmaData>>('OK', data, undefined);
      }),
      catchError((error) => {
        return of(new State<Array<IPharmaData>>('ERROR', error, undefined));
      })
    );
  }
}
