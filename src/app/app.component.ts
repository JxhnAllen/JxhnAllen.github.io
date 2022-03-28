import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Observable, Subject, takeUntil } from 'rxjs';
import * as actions from 'src/app/store/actions/actions.actions';
import * as fromReducer from './store/reducers/reducers.reducer';
import { selectCurrentSection, selectThemeToggle } from './store/selectors/selectors.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'John Allen :: Portfolio';

    private ngUnsubscribe$ = new Subject<void>();
    public themeDarkMode$: Observable<any>;
    public themeDarkMode: any;

    public activeSection$: Observable<any>;
    public activeSection: any;


    constructor(
        private store: Store<fromReducer.siteState>,
        private router: Router,
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any
    ) {
        this.themeDarkMode$ = this.store.select(selectThemeToggle);
        this.themeDarkMode$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((value) => {
                this.themeDarkMode = value;
            });

        this.activeSection$ = this.store.select(selectCurrentSection);
        this.activeSection$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((value) => {
                console.log("value", `#${value}`);
                this.activeSection = value;
                this.pageScrollService.scroll({
                    scrollTarget: `#${value}`,
                    document: this.document
                });
            });
    }

    // fullPageScroll(event: HTMLElement, i: any) {
    //     this.pageScrollService.scroll({
    //         scrollTarget: event,
    //         document: this.document
    //     });

    // }

    ngOnInit(): void {
        this.store.dispatch(actions.loadActions());
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
