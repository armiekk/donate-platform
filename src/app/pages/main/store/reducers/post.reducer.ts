import { ActionReducer } from '@ngrx/store';

import * as PostActions from '../actions/post.action';

import { PostState, Post } from '../../models/post';

type Action = PostActions.ALL;

const initialState: PostState = {
    charity: [],
    campaign: [],
    ads: [],
    invalidate: false,
    loading: false,
}

const postType = {
    0: 'charity',
    1: 'campaign',
    2: 'ads'
};

const mapPayloadToProperList = (state: PostState, payload: Post) => [
    ...state[postType[payload.postType]]
        .map(val => ({ ...val })),
    payload,
]

const slicePayloadToProperList = (payload: Post[]) => ({
    [postType[0]]: payload.filter(val => val.postType === 0),
    [postType[1]]: payload.filter(val => val.postType === 1),
    [postType[2]]: payload.filter(val => val.postType === 2),
})

export const PostReducer: ActionReducer<PostState> = (state: PostState, action: Action) => {
    switch (action.type) {
        case PostActions.FETCH_POST:
            return {
                ...state,
                loading: true,
                invalidate: true,
            }
        case PostActions.SUCCESS_FETCH_POST:
            return {
                loading: false,
                invalidate: false,
                ...slicePayloadToProperList(action.payload)
            }
        case PostActions.FAILED_FETCH_POST:
            return {
                ...initialState,
                invalidate: true,
            }
        case PostActions.CREATE_POST:
            return {
                ...state,
                loading: false,
                invalidate: false,
                [postType[action.payload.postType]]: mapPayloadToProperList(state, action.payload)
            }
        default:
            return state;
    }
}