import { selectCustomers } from './../../../store/selectors/customers.selectors';
import { loadCustomers } from './../../../store/actions/customers.actions';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CustomerFacade } from '~customers/services/customer.facade';
import { CustomerService } from '~customers/services/customer.service';
import { Customer } from '~types/customer';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersOverviewPageComponent implements OnInit {
  // customers: Customer[];
  customers$: Observable<Customer[]>;
  private destroyed$ = new Subject<boolean>();

constructor(private customerService: CustomerService,
            private store: Store<AppState>) { }

  ngOnInit(): void {
    this.customers$ = this.store.pipe(select(selectCustomers))
    // this.store.dispatch(loadCustomers({customers: this.customers$}))
    // console.log(this.customers);
    // this.store.getCustomers().subscribe(customers =>
    //     this.customers = customers
    // )
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
