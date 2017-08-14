import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as PostActions from '../actions/post.action';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostEffect {

    constructor(
        private $action: Actions,
        private postService: PostService,
    ) { }

    @Effect() $fetchPost = this.$action
        .ofType(PostActions.FETCH_POST)
        .map(toPayload)
        .switchMap((payload: Post) => this.postService.findAllPostByCondition(payload))
        .map((response: Post[]) => new PostActions.SuccessFetchPost(response))
        .catch(() => Observable.of(new PostActions.FailedFetchPost()));

}