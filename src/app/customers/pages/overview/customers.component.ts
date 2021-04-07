import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerFacade } from '~customers/services/customer.facade';
import { CustomerService } from '~customers/services/customer.service';
import { Customer } from '~types/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersOverviewPageComponent implements OnInit {
  customers: Customer[];
  private destroyed$ = new Subject<boolean>();

constructor(private customerService: CustomerService,
            private store: CustomerFacade) { }

  ngOnInit(): void {
    this.store.getCustomers().subscribe(customers => {
      if(customers.length === 0) {
        this.customerService.fetchCustomers().subscribe(customers => {
          this.store.setCustomers(customers);
          this.customers = customers;
        });
      } else {
        this.customers = customers;
      }
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
