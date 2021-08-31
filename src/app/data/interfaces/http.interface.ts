import {HttpHeaders} from '@angular/common/http';

export interface BatchRequestParam {
    method: string;
    params: {
        url: string;
        params?: object;
        body?: any;
        options?: HttpHeaders;
    };
}
