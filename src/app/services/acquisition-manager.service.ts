import { Target } from './../models/target.model';
import { Injectable } from '@angular/core';
import { Performance } from '../models/performance.enum';
import { Status } from '../models/status.enum';

@Injectable()
export class AcquisitionManagerService {
  public targets: Target[] = [];
  public selectedTarget: Target = new Target(-1, '', '', '', '');

  constructor() {
    this.targets.push({ id: 1, Status: Status[Status.Approval], CompanyInfo: "ABC Enterprises.", KeyContacts: 'Mr Diwakar Kumar', Performance: Performance[Performance.Satisfactory] });
    this.targets.push({ id: 2, Status: Status[Status.Pending], CompanyInfo: "Aashvi Corp.", KeyContacts: 'Mrs Aparna Thakur', Performance: Performance[Performance.Good] });
    this.targets.push({ id: 3, Status: Status[Status.Approved], CompanyInfo: "Jain Sons.", KeyContacts: 'Miss Ishika Jain', Performance: Performance[Performance.Satisfactory] });
    // this.targets.push({ Status: Status[Status.Approved], CompanyInfo: "Jain Sons.", KeyContacts: 'Miss Ishika Jain', Performance: Performance[Performance.Satisfactory] });
  }

  public addNewTargets(newTarget: Target) {
    this.targets.push(newTarget);
  }

  public bindStatusList() {
    const optionsStatus = [];
    optionsStatus.push({ id: Status.Approval, name: Status[Status.Approval] });
    optionsStatus.push({ id: Status.Approved, name: Status[Status.Approved] });
    optionsStatus.push({ id: Status.Declined, name: Status[Status.Declined] });
    optionsStatus.push({ id: Status.Pending, name: Status[Status.Pending] });
    optionsStatus.push({ id: Status.Researching, name: Status[Status.Researching] });
    return optionsStatus;
  }

  public bindPerformanceList() {
    const optionsPerformance = [];
    optionsPerformance.push({ id: Performance.Brilliant, name: Performance[Performance.Brilliant] });
    optionsPerformance.push({ id: Performance.Good, name: Performance[Performance.Good] });
    optionsPerformance.push({ id: Performance.Satisfactory, name: Performance[Performance.Satisfactory] });
    return optionsPerformance;
  }

}
