import { loadCustomersSuccess } from './../actions/customers.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from '~types/customer';
import * as fromCustomersActions from '../actions/customers.actions';


export const customersFeatureKey = 'customers';

export interface State {
  results: Customer[];
  isLoadCustomersSuccess: boolean | null;
}

export const initialState: State = {
  results: [
    {
      id: 1,
      customername: '34bd4e53-029d-4743-831a-35efc0e003f4',
      projectname: 'renson',
      status: 'offer',
      date: 'end of june',
      firstname: 'Jane',
      lastname: 'Doe',
      email: 'test@test.com',
      phonenumber: 11111111,
      vat: 11,
      address: {
        addressline1: 'kouterbaan',
        city: 'denderleeuw',
        state: 'oost-vlanderen',
        country: 'belgie',
        zip: 9470
      }
    },
  ],
  isLoadCustomersSuccess: null
};


export const reducer = createReducer(
  initialState,
  on(
    fromCustomersActions.loadCustomers, (state, action) => {
      return {
        ...state,
        results: action.customers
      }
    }
  ),
  on(
    fromCustomersActions.loadCustomersSuccess, (state, action) => {
      return {
        ...state,
        isLoadCustomersSuccess: action.isLoadCustomersSuccess,
      }
    }
  )
);

