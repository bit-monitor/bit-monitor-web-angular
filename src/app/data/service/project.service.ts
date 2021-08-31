import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import {HttpService} from '@core/service/http.service';
import {FailCallback, SuccessCallback} from '@data/types/http.type';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(
        private httpService: HttpService
    ) {
    }

    /**
     * 新增项目
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public addProject(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.put('/project/add', params).subscribe(
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
     * 获取项目列表
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public getProjects(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.get('/project/get', params).subscribe(
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
     * 更新项目内容
     * @param params 参数
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public updateProject(params: object, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.post('/project/update', params).subscribe(
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
     * 删除项目记录
     * @param id id
     * @param successCallback 成功回调
     * @param failCallback 失败回调
     */
    public deleteProject(id: number, successCallback?: SuccessCallback, failCallback?: FailCallback): void {
        this.httpService.delete('/project/delete/' + id).subscribe(
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
