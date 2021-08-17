import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})

export class GetStartedComponent implements OnInit {

  constructor(
    private meta: MetaService,
    @Inject(LOCALE_ID) protected localeId: string,
  ) { }

  ngOnInit() {
    this.meta.setGlobalTitle('VPN App | Orchid');
    this.meta.setGlobalDescription('Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy.');
    this.meta.update('og:url', 'https://www.orchid.com/');
  }

}
