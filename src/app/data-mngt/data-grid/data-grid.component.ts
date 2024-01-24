/**
 * Imports Angular core functionality needed for the component.
 *
 * Component - Enables Angular component decorator.
 * OnInit - Implements lifecycle hook interface.
 * inject - Dependency injection utility.
 */
import { Component, inject } from '@angular/core';


import { DataService } from '../data.service';
import { IPharmaData } from '../pharma.data';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [],
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent {
  public dataService = inject(DataService);

  dataByCode(index: number, pharmaData: IPharmaData) {
    return pharmaData.drug_code;
  }
}
