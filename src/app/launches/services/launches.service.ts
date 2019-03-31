import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  apiEndpoint = '/launches';

  constructor(private http: HttpClient) {  }

  getLaunches(getParams) {
    const params = new HttpParams({
      fromObject: getParams
    });

    return this.http.get(
      `${environment.spacexapi}${this.apiEndpoint}`,
      {
        params,
        observe : 'response'
      });
  }
}
