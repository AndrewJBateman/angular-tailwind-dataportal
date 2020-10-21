import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const QUERY_URL = environment.QUERY_URL;

@Injectable({
  providedIn: 'root',
})
export class BigqueryService {
  constructor(private http: HttpClient) {}

  // create a dataset before loading data into BigQuery.
  // Method takes 2 parameters: the BigQuery dataset name and the query type: Create, Read, Update or Delete
  onQuery(datasetName: string, q: string) {
    console.log('QUERY_URL', QUERY_URL);
    const postParams = {
      datasetName: datasetName,
      query: q,
    };
    console.table(postParams);
    return this.http.post(QUERY_URL, postParams);
  }
}
