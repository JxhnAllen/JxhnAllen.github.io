import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    loadStore = '[ ACTION ] store loaded',
    toggleTheme = '[ ACTION ] toggle theme',
    toggleActiveSection = '[ ACTION ] toggle active section'
}

export const loadActions = createAction(
    ActionTypes.loadStore,
);

export const toggleTheme = createAction(
    ActionTypes.toggleTheme,
    props<{ isDark: boolean; }>()
);

export const toggleActiveSection = createAction(
    ActionTypes.toggleActiveSection,
    props<{ activeSection: string; }>()
);
