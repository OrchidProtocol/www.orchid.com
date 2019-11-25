import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.setGlobalTitle('Our Vision | Orchid');
    this.meta.setGlobalDescription('Orchid’s mission is to build Open Source software that keeps the internet open and accessible — a natural resource for everyone, everywhere.');
  }

}
