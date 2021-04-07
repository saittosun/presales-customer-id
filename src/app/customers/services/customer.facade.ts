import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer } from '~types/customer';

import { setCustomers, updateCustomer, addCustomer } from '../store/customer.actions';
import {
  CUSTOMERS_ERROR,
  CUSTOMERS_LOADING
} from '../store/customer.selectors';
import { AppState } from '../store/customer.types';

@Injectable()
export class CustomerFacade {
  constructor(private store: Store<AppState>) { }

  public setCustomers(customers: Customer[]) {
    this.store.dispatch(setCustomers({customers: customers}));
  }

  public selectLoading(): Observable<boolean> {
    return this.store.pipe(select(CUSTOMERS_LOADING));
  }

  public selectError(): Observable<string> {
    return this.store.pipe(select(CUSTOMERS_ERROR));
  }

  public getCustomers(): Observable<Customer[]> {
    return this.store.select('customers').pipe(map(state => state.list.results));
  }

  public updateCustomer(id: number, customer: Customer): void {
    this.store.dispatch(updateCustomer({id, customer}))
  }

  public addCustomer(customer: Customer): void {
    this.store.dispatch(addCustomer({customer}))
  }
}
