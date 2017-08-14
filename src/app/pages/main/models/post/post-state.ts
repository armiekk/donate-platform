import { Post } from './post';

export interface PostState {
    loading?: boolean;
    invalidate?: boolean;
    charity?: Post[];
    campaign?: Post[];
    ads?: Post[];
}