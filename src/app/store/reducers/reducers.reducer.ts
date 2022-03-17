import { Action, createReducer, on } from '@ngrx/store';
import { Dark } from '../../models/dark.model';
import * as ActionTypes from '../actions/actions.actions';


export const reducersFeatureKey = 'state';

export interface siteState {
    loading: boolean;
    dark: Dark;
}

export const initialState: siteState = {
    loading: false,
    dark: {
        darkMode: false
    }
};


export const appReducer = createReducer(
    initialState,
    on(ActionTypes.loadActions,
        (state): siteState => state),
    on(
        ActionTypes.toggleTheme,
        (state: siteState, action: { isDark: boolean; }) => {
            return {
                ...state,
                dark: {
                    ...state.dark,
                    darkMode: action.isDark
                }
            };
        }
    ),
);

export function reducer(state: siteState, action: Action) {
    return appReducer(state, action);
}


