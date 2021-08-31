import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable, forkJoin} from 'rxjs';

import {BatchRequestParam} from '@data/interfaces/http.interface';
import {EnvService} from './env.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly apiBasicUrl: string;

    constructor(
        private httpClient: HttpClient,
        private envService: EnvService
    ) {
        this.apiBasicUrl = this.envService.getApiBasicUrl();
    }

    public get(url: string, params?: object, options?: HttpHeaders): Observable<{}> {
        let httpParams = new HttpParams();
        const fullUrl = this.apiBasicUrl + url;
        if (params) {
            for (const key in params) {
                if (params[key] !== undefined) {
                    httpParams = httpParams.set(key, params[key]);
                }
            }
        }
        return this.httpClient.get(fullUrl, {headers: options, params: httpParams});
    }

    public post(url: string, body: any = null, options?: object): Observable<{}> {
        let httpParams = new HttpParams();
        const fullUrl = this.apiBasicUrl + url;
        if (body) {
            for (const key in body) {
                if (body[key] !== undefined) {
                    httpParams = httpParams.set(key, body[key]);
                }
            }
        }
        return this.httpClient.post(fullUrl, httpParams, options);
    }

    public put(url: string, body: any = null, options?: object): Observable<{}> {
        let httpParams = new HttpParams();
        const fullUrl = this.apiBasicUrl + url;
        if (body) {
            for (const key in body) {
                if (body[key] !== undefined) {
                    httpParams = httpParams.set(key, body[key]);
                }
            }
        }
        return this.httpClient.put(fullUrl, httpParams, options);
    }

    public delete(url: string, options?: object): Observable<{}> {
        const fullUrl = this.apiBasicUrl + url;
        return this.httpClient.delete(fullUrl, options);
    }

    public batchRequest(requestParams: BatchRequestParam[]): Observable<{}> {
        return forkJoin(requestParams.map(req => {
            const {url, params, options, body} = req.params;
            switch (req.method) {
                case 'get':
                    return this.get(url, params, options);
                case 'post':
                    return this.post(url, body, options);
                case 'put':
                    return this.put(url, body, options);
                case 'delete':
                    return this.delete(url, options);
            }
        }));
    }
}
