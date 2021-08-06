import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guard/auth.guard';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NotFoundLayoutComponent } from './layout/not-found-layout/not-found-layout.component';

const routes: Routes = [
    {
        path: '',
        component: ContentLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'project',
                loadChildren: () => import('@modules/project/project.module').then(m => m.ProjectModule)
            },
            {
                path: 'systemManage',
                loadChildren: () => import('@modules/system-manage/system-manage.module').then(m => m.SystemManageModule)
            },
            {
                path: 'advancedSearch',
                loadChildren: () => import('@modules/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)
            },
            {
                path: 'alarmManage',
                loadChildren: () => import('@modules/alarm-manage/alarm-manage.module').then(m => m.AlarmManageModule)
            },
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        component: NotFoundLayoutComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
