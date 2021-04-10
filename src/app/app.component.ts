import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerFacade } from '~customers/services/customer.facade';
import { CustomerService } from '~customers/services/customer.service';
import { Customer } from '~types/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lead-follow-up';

  customers: Customer[];
  private destroyed$ = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
    //  this.store.getCustomers().subscribe(customers => {
    //   if(customers.length === 0) {
    //     this.customerService.fetchCustomers().subscribe(customers => {
    //       this.store.setCustomers(customers);
    //       this.customers = customers;
    //     });
    //   } else {
    //     this.customers = customers;
    //   }
    // })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
