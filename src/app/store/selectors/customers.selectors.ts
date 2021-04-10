import { customersFeatureKey, State } from './../reducers/customers.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// get feature from store
export const selectCustomersFeature = createFeatureSelector<State>(
  customersFeatureKey
)

//return customers from feature
export const selectCustomers = createSelector(
  selectCustomersFeature,
  (state: State) => state.results
)
