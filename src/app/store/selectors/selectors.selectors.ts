import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as State from '../reducers/reducers.reducer';


export const getCurrentState = createFeatureSelector<State.siteState>(
    State.reducersFeatureKey);

export const selectState = (state: State.siteState) => state;


export const selectCurrentState = createSelector(
    getCurrentState,
    (state: State.siteState) => state
);

export const selectThemeToggle = createSelector(
    getCurrentState,
    (state: State.siteState) => {
        return (state ? state?.dark?.darkMode : null);
    }
);