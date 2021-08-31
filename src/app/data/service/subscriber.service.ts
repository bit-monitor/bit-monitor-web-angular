import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {HttpService} from '@core/service/http.service';
import {FailCallback, SuccessCallback} from '@data/types/http.type';

@Injectable({
    providedIn: 'root'
})
export class SubscriberService {

    constructor(
        private httpService: HttpService
    ) {
    }

    /**
     * 获取预警列表
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getSubscriberNotifyRecord(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/subscriberNotifyRecord/get', params).subscribe(
            (res: any) => {
                if (typeof successCallback === 'function') {
                    successCallback(res);
                }
            },
            (err: HttpErrorResponse) => {
                if (typeof failCallback === 'function') {
                    failCallback(err);
                }
            }
        );
    }
}
