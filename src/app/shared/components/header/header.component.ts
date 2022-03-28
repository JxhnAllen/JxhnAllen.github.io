import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Observable, Subject, takeUntil } from 'rxjs';
import * as actions from 'src/app/store/actions/actions.actions';
import { siteState } from 'src/app/store/reducers/reducers.reducer';
import { selectThemeToggle } from 'src/app/store/selectors/selectors.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
    isDark = false; // ? notice this

    private ngUnsubscribe$ = new Subject<void>();
    public themeDarkMode$: Observable<boolean>;
    public themeDarkMode: boolean;
    public section: string;

    constructor(
        private overlayContainer: OverlayContainer,
        private store: Store<siteState>,
        private router: Router,
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any
    ) {
        this.themeDarkMode$ = this.store.select(selectThemeToggle);
        this.themeDarkMode$
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((value) => {
                this.themeDarkMode = value;
                console.log("this.value", value);
            });
        // this.store.subscribe(state => console.log({ state }));
    }

    ngOnInit(): void { }

    public toggleTheme() {
        this.store.dispatch(
            actions.toggleTheme({ isDark: !this.themeDarkMode })
        );
    }

    navToSection(section: string) {
        this.section = section;
        this.store.dispatch(
            actions.toggleActiveSection({ activeSection: section })
        );

    }


    public goToAbout(element: HTMLElement) {
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
