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
    this.meta.setGlobalTitle('VPN App for iOS, Android & macOS | Orchid');
    this.meta.setGlobalDescription('Orchid is a VPN client, VPN service and advanced networking tool.');
  }
}
