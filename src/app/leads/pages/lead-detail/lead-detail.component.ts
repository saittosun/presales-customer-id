import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CustomerFacade } from '~customers/services/customer.facade';
import { Lead } from '~types/lead';
import { LeadFacade } from '../../services/lead.facade';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailPageComponent implements OnInit, OnDestroy {
  statusResolutionForm : FormGroup;
  private destroyed$ = new Subject<boolean>();
  leads: Lead[];
  lead: Lead;
  id: string;
  activeResolution: string;
  resolutionArray: string[] = environment.resolution
  activeStatus: string;
  statusArray: string[] = environment.status

  constructor(private store: LeadFacade,
              private route: ActivatedRoute,
              private customerFacade: CustomerFacade,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    })
    this.store.getLeads().subscribe(leads => {
      this.leads = leads
      console.log(this.leads);
    })
    this.lead = this.leads.find(lead => lead.id === this.id),
    this.createStatusResolutionForm();
    this.activeStatus = this.lead.status;
    this.activeResolution = this.lead.resolution;
  }

  onHandleCustomer() {
    const customerName = this.lead.customer;
    this.customerFacade.getCustomers().subscribe(customers => {
      customers.forEach(customer => {
        if(customer.customername === customerName) {
          this.router.navigate(['customers/customer-detail', customer.id])
        }
      })
    })
  }

  private createStatusResolutionForm() {
    this.statusResolutionForm = this.fb.group({
      statusForm: new FormControl(this.lead.status, Validators.required),
      resolutionForm: new FormControl(this.lead.resolution, Validators.required)
    })
  }

  onStatusChange() {
    this.activeStatus = this.statusResolutionForm.value.statusForm;
  }

  onResolutionChange() {
    this.activeResolution = this.statusResolutionForm.value.resolutionForm;
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
