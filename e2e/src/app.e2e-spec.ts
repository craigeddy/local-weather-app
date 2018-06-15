import { AppPage } from './app.po'
import { MaterialModule } from '../../src/app/material.module'

describe('workspace-project App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('LocalCast Weather')
  })
})
