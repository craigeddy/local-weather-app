import { Observable, BehaviorSubject, of } from 'rxjs'

import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzele',
  }
  currentWeather = new BehaviorSubject<ICurrentWeather>(this.fakeWeather)

  public getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }

  public getCurrentWeatherByCoords(coords: Coordinates) {
    return of(this.fakeWeather)
  }

  public updateCurrentWeather(search: string | number, country?: string) {
    this.getCurrentWeather(search, country).subscribe(weather =>
      this.currentWeather.next(weather)
    )
  }
}
