import { createAction, props } from '@ngrx/store';
import { Customer } from '~types/customer';

export const loadCustomers = createAction(
  '[Customers Component] Load Customers',
  props<{customers: Customer[]}>()
);

export const loadCustomersSuccess = createAction(
  '[Customers Effect] Load Customers Success',
  props<{isLoadCustomersSuccess: Customer}>()
);
