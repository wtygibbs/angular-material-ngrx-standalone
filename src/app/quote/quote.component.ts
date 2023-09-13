import { Component, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule, JsonPipe, NgSwitch } from '@angular/common';
import { QuoteService } from './quote.service';
import { InsuredDetailsComponent } from "../shared/quote-step-elements/insured-details/insured-details.component";
import { MailingAddressComponent } from "../shared/quote-step-elements/mailing-address/mailing-address.component";
import { PhysicalAddressComponent } from "../shared/quote-step-elements/physical-address/physical-address.component";
import { MapComponent } from "../shared/components/map/map.component";
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'grid-quote',
    standalone: true,
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss'],
    imports: [CommonModule, MatStepperModule, JsonPipe, NgSwitch, InsuredDetailsComponent, MailingAddressComponent, PhysicalAddressComponent, MapComponent]
})
export class QuoteComponent {
  coverageType: string;
  coverage!: any;
  mapData: any;

  constructor(private quoteService: QuoteService, private route: ActivatedRoute, private router: Router) {
    this.coverageType = this.route.snapshot.data['resolvedData'];

    // this.steps = this.quoteService.getexcessLiabilitySteps();
    if(this.coverageType !== ''){
      this.coverage = this.quoteService.getCoverageSteps(this.coverageType);
    }
    else {
    // Navigate to the /
    this.router.navigate(['/']);
    }
  }

  getGeneralInformationForm() {
    // return this.form.controls['generalInfo'];
  }
}
