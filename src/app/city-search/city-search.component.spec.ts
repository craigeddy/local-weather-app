import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MaterialModule } from '../material.module'
import { FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'

import { CitySearchComponent } from './city-search.component'
import { WeatherService } from '../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('CitySearchComponent', () => {
  let component: CitySearchComponent
  let fixture: ComponentFixture<CitySearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
