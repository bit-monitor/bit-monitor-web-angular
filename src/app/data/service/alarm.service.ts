import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {HttpService} from '@core/service/http.service';
import {FailCallback, SuccessCallback} from '@data/types/http.type';

@Injectable({
    providedIn: 'root'
})
export class AlarmService {

    constructor(
        private httpService: HttpService
    ) {
    }

    /**
     * 新增预警
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public addAlarm(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.put('/alarm/add', params).subscribe(
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

    /**
     * 获取预警列表
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getAlarms(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/alarm/get', params).subscribe(
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

    /**
     * 更新预警内容
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public updateAlarm(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.post('/alarm/update', params).subscribe(
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

    /**
     * 删除预警记录
     * @param id id
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public deleteAlarm(id: number, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.delete('/alarm/delete/' + id).subscribe(
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

    /**
     * 获取预警记录列表
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getAlarmRecord(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/alarmRecord/get', params).subscribe(
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

    /**
     * 获取预警记录列表
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getWithRelatedInfo(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/subscriberNotifyRecord/getWithRelatedInfo', params).subscribe(
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
