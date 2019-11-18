import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})

export class DownloadComponent implements OnInit {
  constructor(private meta: MetaService) { }
  ngOnInit() {
    this.meta.setGlobalTitle('Packet Analyzer App for iOS & Android | Orchid');
    this.meta.setGlobalDescription('Try the pre-release Orchid app');
  }
}
