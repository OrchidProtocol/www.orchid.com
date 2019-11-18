import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-service-terms',
  templateUrl: './service-terms.component.html',
  styleUrls: ['./service-terms.component.scss']
})
export class ServiceTermsComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('Terms of Service | Orchid');
  }

}
