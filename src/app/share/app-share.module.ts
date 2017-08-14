import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from '../components/template/template.component';

// service 
import { AuthService } from './services/auth.service';

// interceptor 
import { AuthInterceptor } from './config/auth-interceptor';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
    ],
    declarations: [TemplateComponent],
    exports: [
        // components export
        TemplateComponent,
        // modules export
        HttpClientModule,
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ]
})
export class AppShareModule { }