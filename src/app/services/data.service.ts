import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PharmaData} from '../models/pharma.data'

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPharmaData(): Observable<PharmaData[]> {
    return this.http.get<PharmaData[]>(`${baseUrl}/api`)
  }
}
