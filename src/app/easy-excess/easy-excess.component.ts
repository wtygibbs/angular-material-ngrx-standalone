import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { InsuredFormComponent } from '../shared/insured-form/insured-form.component';
import { FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'grid-easy-excess',
  standalone: true,
  imports: [MatStepperModule, InsuredFormComponent, JsonPipe],
  templateUrl: './easy-excess.component.html',
  styleUrls: ['./easy-excess.component.scss'],
})
export class EasyExcessComponent implements OnInit {
  @ViewChild(InsuredFormComponent, { static: true })
  insuredFormComponent!: InsuredFormComponent;
  insuredForm!: FormGroup;

  ngOnInit(): void {
    this.insuredForm = this.insuredFormComponent.insuredForm;
  }
}
