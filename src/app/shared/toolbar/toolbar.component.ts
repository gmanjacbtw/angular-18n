import { Component, Input } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() showLangSelector: boolean = false;
  constructor(private translationService: TranslationService) {}

  public onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLanguage = selectElement.value;
    this.translationService.changeLang(selectedLanguage);
  }
}
