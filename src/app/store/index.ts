import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomers from './reducers/customers.reducer';


export interface AppState {

  [fromCustomers.customersFeatureKey]: fromCustomers.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromCustomers.customersFeatureKey]: fromCustomers.reducer,
};
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
