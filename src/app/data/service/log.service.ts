import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {HttpService} from '@core/service/http.service';

import {BasicFilters} from '@data/interfaces/log.interface';
import {FailCallback, SuccessCallback} from '@data/types/http.type';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    constructor(
        private httpService: HttpService
    ) {
    }

    /**
     * 获取总览页信息
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getOverallByTimeRange(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/statistic/getOverallByTimeRange', params).subscribe(
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
     * 获取日志统计数据
     * @param logTypeList 日志类型列表
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getLogCountByHours(
        logTypeList: string[], params: BasicFilters, successCallback?: SuccessCallback, failCallback?: FailCallback
    ): void {
        const batchRequestParams = logTypeList.map(logType => {
            return {
                method: 'get',
                params: {
                    url: '/statistic/getLogCountByHours',
                    params: {
                        logType,
                        projectIdentifier: params.projectIdentifier,
                        startTime: params.startTime,
                        endTime: params.endTime
                    }
                }
            };
        });
        this.httpService.batchRequest(batchRequestParams).subscribe(
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
     * js异常日志-聚合查询
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getJsErrorLogByGroup(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/jsErrorLog/getByGroup', params).subscribe(
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
     * http异常日志-聚合查询
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getHttpErrorLogByGroup(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/httpErrorLog/getByGroup', params).subscribe(
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
     * resource加载异常日志-聚合查询
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getResourceLoadErrorLogByGroup(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/resourceLoadErrorLog/getByGroup', params).subscribe(
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
     * custom异常日志-聚合查询
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getCustomErrorLogByGroup(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/customErrorLog/getByGroup', params).subscribe(
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
     * 统计-获取两个日期之间的对比数据
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getLogCountBetweenDiffDate(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/statistic/getLogCountBetweenDiffDate', params).subscribe(
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
     * 统计-获取两个日期之间的设备、操作系统、浏览器、网络类型的统计数据
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getLogDistributionBetweenDiffDate(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/statistic/getLogDistributionBetweenDiffDate', params).subscribe(
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
     * 日志记录-高级查询-多条件
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getLogListByConditions(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.post('/log/list', params).subscribe(
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
