import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import * as actions from 'src/app/store/actions/actions.actions';
import * as fromReducer from './store/reducers/reducers.reducer';
import { selectThemeToggle } from './store/selectors/selectors.selectors';

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

    constructor(
        private store: Store<fromReducer.siteState>,
        private router: Router,
    ) {
        this.themeDarkMode$ = this.store.select(selectThemeToggle);
        this.themeDarkMode$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((value) => {
                this.themeDarkMode = value;
            });
    }

    ngOnInit(): void {
        this.store.dispatch(actions.loadActions());
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
