import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    loadStore = '[ ACTION ] store loaded',
    toggleTheme = '[ ACTION ] toggle theme',
}

export const loadActions = createAction(
    ActionTypes.loadStore,
);

export const toggleTheme = createAction(
    ActionTypes.toggleTheme,
    props<{ isDark: boolean; }>()
);
