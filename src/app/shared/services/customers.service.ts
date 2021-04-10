import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Customer } from '~types/customer';

@Injectable()
export class CustomersService {
  fetchCustomers(): Observable<Customer[]> {
    return of([
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
      {
        id: 2,
        customername: 'Digipolis Antwerpen',
        projectname: 'Antwerpen Morgen',
        status: 'offer',
        date: '11/05/2021',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'test@test.com',
        phonenumber: 22222222,
        vat: 11,
        address: {
          addressline1: 'kouterbaan',
          city: 'denderleeuw',
          state: 'oost-vlanderen',
          country: 'belgie',
          zip: 9470
        }
      },
      {
        id: 3,
        customername: 'Digipolis Antwerpen',
        projectname: 'Nova',
        status: 'BAFO',
        date: '12/05/2022',
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
      {
        id: 4,
        customername: '14bd4e53-029d-4743-831a-35efc0e003f4',
        projectname: 'Mono',
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
      {
        id: 5,
        customername: '14bd4e53-029d-4743-831a-35efc0e003f4',
        projectname: 'presales',
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
    ])
  }

  // updateCustomer(id: number, customer: Customer): Observable<Customer> {
  //   return of({...customer, id})
  // }

  // addCustomer(customer: Customer): Observable<Customer>{
  //   return of({...customer})
  // }
}
