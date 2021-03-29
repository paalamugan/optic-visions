import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { MainModule } from '../main/main.module';
import { AuthGuard } from '../guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../guards/token-interceptor.service';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { SharedService } from '../services/shared.service';

const routes: Routes = [
    {path: '', loadChildren: '../main/main.module#MainModule'},
    {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    {path: 'login', loadChildren: '../login/login.module#LoginModule'},
    {path: 'forget-password/:uuid', component: ForgetPasswordComponent},
    {path: '**', redirectTo: '/login', pathMatch:'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }]
})
export class MainLoadModule { }