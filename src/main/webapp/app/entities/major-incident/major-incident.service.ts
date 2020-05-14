import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption, Search } from 'app/shared/util/request-util';
import { IMajorIncident } from 'app/shared/model/major-incident.model';

type EntityResponseType = HttpResponse<IMajorIncident>;
type EntityArrayResponseType = HttpResponse<IMajorIncident[]>;

@Injectable({ providedIn: 'root' })
export class MajorIncidentService {
  public resourceUrl = SERVER_API_URL + 'api/major-incidents';
  public resourceSearchUrl = SERVER_API_URL + 'api/_search/major-incidents';

  constructor(protected http: HttpClient) {}

  create(majorIncident: IMajorIncident): Observable<EntityResponseType> {
    return this.http.post<IMajorIncident>(this.resourceUrl, majorIncident, { observe: 'response' });
  }

  update(majorIncident: IMajorIncident): Observable<EntityResponseType> {
    return this.http.put<IMajorIncident>(this.resourceUrl, majorIncident, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMajorIncident>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMajorIncident[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  search(req: Search): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMajorIncident[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
  }
}
