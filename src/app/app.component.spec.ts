import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { WeatherServiceFake } from './weather/weather.service.fake'
import { MaterialModule } from './material.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { CitySearchComponent } from './city-search/city-search.component'
import { FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather')
  }))
})
