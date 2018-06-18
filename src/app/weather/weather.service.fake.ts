import { Observable, of } from 'rxjs'

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

  public getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }

  public getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}
