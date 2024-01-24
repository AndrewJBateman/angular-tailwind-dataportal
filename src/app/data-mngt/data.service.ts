import { Injectable, inject, Signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError, share } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IPharmaData } from './pharma.data';
import { State, StatusNotification } from './state.model';
import { environment } from '../../environments/environment';

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
  http = inject(HttpClient);
  /**
   * Signal that emits State object with status, data, error.
   * State is initialized to loadData() observable.
   * loadData() makes HTTP request to API_URL, handles response with OK state or ERROR state.
   * Shares replay of 1, maps to State object with status, data, error.
   * Catches errors and maps to State with ERROR status and error.
   */
  pharmaDataState: Signal<State<IPharmaData[]> | State<null> | undefined> =
    toSignal(this.loadData());

  loadData(): Observable<State<Array<IPharmaData>> | State<null>> {
    return this.http.get<Array<IPharmaData>>(`${environment.API_URL}/api`).pipe(
      share(),
      map((data) => {
        return new State<Array<IPharmaData>>(
          StatusNotification.OK,
          data,
          null
        );
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(
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
