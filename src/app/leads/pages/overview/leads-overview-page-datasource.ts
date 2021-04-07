import { LeadFacade } from './../../services/lead.facade';
import { Lead } from '~types/lead';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export class LeadsOverviewPageDataSource extends DataSource<Lead> {
  data: Lead[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  store: LeadFacade;

  constructor(store: LeadFacade) {
    super();
    this.store = store;
    this.store.getLeads().subscribe(leads => {
      this.data = leads;
    })
  }

  connect(): Observable<Lead[]> {
    if (this.paginator && this.sort) {
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  disconnect(): void {}
  private getPagedData(data: Lead[]): Lead[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(data: Lead[]): Lead[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'project': return compare(a.name, b.name, isAsc);
        case 'customer': return compare(a.customer, b.customer, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
