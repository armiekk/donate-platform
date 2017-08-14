import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    authService

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        this.authService = this.injector.get(AuthService);

        req.headers.set('Accept', 'application/json');
        req.headers.set('Content-Type', 'application/json');
        return next.handle(req);
    }
}