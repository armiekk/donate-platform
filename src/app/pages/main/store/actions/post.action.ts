import { Action } from '@ngrx/store';
import { Post } from '../../models/post';

export const FETCH_POST = 'FETCH_POST';
export const SUCCESS_FETCH_POST = 'SUCCESS_FETCH_POST';
export const FAILED_FETCH_POST = 'FAILED_FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

export class FetchPost implements Action {
    readonly type = FETCH_POST;
    constructor(public payload?: Post) { }
}

export class SuccessFetchPost implements Action {
    readonly type = SUCCESS_FETCH_POST;
    constructor(public payload: Post[]) { }
}

export class FailedFetchPost implements Action {
    readonly type = FAILED_FETCH_POST;
}

export class CreatePost implements Action {
    readonly type = CREATE_POST;
    constructor(public payload: Post) { }
}

export type ALL = FetchPost
    | SuccessFetchPost
    | FailedFetchPost
    | CreatePost;
