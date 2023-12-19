import { Injectable, Signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IPharmaData } from './pharma.data';
import { State, StatusNotification } from './state.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
/**
 * Data service class that handles fetching pharma data.
 * Exports pharmaDataState signal initialized to loadData() observable.
 * loadData() makes HTTP request to API_URL, handles response with OK state or ERROR state.
 * Shares replay of 1, maps to State object with status, data, error.
 * Catches errors and maps to State with ERROR status and error.
 */
export class DataService {
  pharmaDataState: Signal<State<IPharmaData[]> | State<null> | undefined> =
    toSignal(this.loadData());

  constructor(private http: HttpClient) {}

  loadData(): Observable<State<Array<IPharmaData>> | State<null>> {
    const API_URL = environment.API_URL;
    return this.http.get<Array<IPharmaData>>(`${API_URL}/api`).pipe(
      shareReplay(1),
      map((data) => {
        return new State<Array<IPharmaData>>(
          StatusNotification.OK,
          data,
          undefined
        );
      }),
      catchError((error: HttpErrorResponse) => {
        return of(
          new State<Array<IPharmaData>>(
            StatusNotification.ERROR,
            undefined,
            error
          )
        );
      })
    );
  }
}
