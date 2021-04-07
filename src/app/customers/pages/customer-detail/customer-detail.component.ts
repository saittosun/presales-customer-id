import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Customer } from '~types/customer';
import { CustomerFacade } from '~customers/services/customer.facade';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailPageComponent implements OnInit {
  private destroyed$ = new Subject<boolean>();
  customers: Customer[];
  customer: Customer;
  id: number;

  constructor(private store: CustomerFacade,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id = this.store.findId(this.id);
    // console.log(id)
/////////
    this.route.params.pipe(
    switchMap((params: Params) => this.store.findCustomer(params.id))
  ).subscribe(customer => this.customer = customer);
  ///////////////
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params.id;
    // })
    // this.store.getCustomers().subscribe(customers => {
    //   this.customers = customers;
    // })
    // this.customer = this.customers.find(customer => customer.id === +this.id)
    // this.route.params.pipe(switchMap((params: Params) => this.store.findCustomer(params.id)))
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}

