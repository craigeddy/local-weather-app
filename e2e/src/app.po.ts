import { browser, by, element } from 'protractor'
import { MaterialModule } from '../../src/app/material.module'

export class AppPage {
  navigateTo() {
    return browser.get('/')
  }

  getParagraphText() {
    return element(by.css('app-root mat-toolbar span')).getText()
  }
}
