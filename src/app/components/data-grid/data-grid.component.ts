import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './../../services/data.service';
import { PharmaData } from './../../models/pharma.data';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  pharmaData$: Observable<PharmaData[]>;

  constructor(private dataService: DataService) {
    this.pharmaData$ = this.dataService.getPharmaData();
  }

  ngOnInit(): void {
  }
}
