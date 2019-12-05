import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({}),
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ja', 'ko', 'zh']);
    const browserLang = translate.getBrowserLang();
    if (browserLang) translate.use(browserLang.match(/en|ja|ko|zh/) ? browserLang : 'en');
  }
}
