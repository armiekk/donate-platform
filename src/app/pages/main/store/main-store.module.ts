import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer }  from './reducers';

//services
import { PostService } from '../services/post.service';

// effects
import { PostEffect } from './effects/post.effect';

@NgModule({
    imports: [
        StoreModule.forFeature('main', { ...rootReducer }),
        EffectsModule.forFeature([PostEffect]),
    ],
    exports: [
        StoreModule,
        EffectsModule,
    ],
    providers: [PostService],
})
export class MainStoreModule { }