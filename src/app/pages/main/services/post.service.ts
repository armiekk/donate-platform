import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Helpers } from '../../../helpers/helpers';
import { Post } from '../models/post';

@Injectable()
export class PostService {

    private basePath = '/api';

    constructor(
        private http: HttpClient
    ) { }

    findAllPostByCondition(condition?: Post) {
        const url = `${this.basePath}/posts?${Helpers.MapFieldsConditionToQueryUri(condition)}`;
        return this.http.get(url)
            .map((res: Post[]) => res);
    }

}