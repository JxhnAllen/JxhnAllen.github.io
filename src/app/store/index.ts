import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromReducer from '../store/reducers/reducers.reducer';

export const key = 'portfolio';
export interface State {
    state: fromReducer.siteState,
}

export const reducers: ActionReducerMap<State> = {
    state: fromReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
