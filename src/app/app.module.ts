import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EasingLogic, NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import * as fromReducer from '../../src/app/store/reducers/reducers.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppEffects } from './store/effects/app.effects';
import { metaReducers, reducers } from './store/index';

const routes: Routes = [];
const easing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeOutQuint easing
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled'
        }),
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        EffectsModule.forRoot([AppEffects]),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],

        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 50,
            logOnly: environment.production,
            name: 'Portfolio NgRX Dev Tools',
        }),

        StoreModule.forFeature(
            fromReducer.reducersFeatureKey,
            fromReducer.reducer
        ),
        NgxPageScrollCoreModule.forRoot({
            duration: 750,
            easingLogic: easing,
            scrollOffset: 50

        })
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule { }
