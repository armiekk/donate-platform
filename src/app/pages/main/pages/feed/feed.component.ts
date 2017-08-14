import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Store } from '@ngrx/store';
import { PostState } from '../../models/post';
import * as PostActions from '../../store/actions/post.action';

@Component({
    selector: 'page-feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {

    state: PostState = {};

    constructor(
        private $store: Store<any>
    ) { }

    ngOnInit() {
        this.$store.select(state => state.main.post)
            .subscribe(state => this.state = state);
        this.$store.dispatch(new PostActions.FetchPost());
    }
}