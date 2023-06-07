import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';
import { IPharmaData } from '../pharma.data';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent implements OnInit {
  public dataService = inject(DataService);

  ngOnInit(): void {}

  dataByCode(index: number, pharmaData: IPharmaData) {
    return pharmaData.drug_code;
  }
}
