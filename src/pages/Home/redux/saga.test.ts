import { call, put, takeLatest } from 'redux-saga/effects';
import * as apis from '../requests';
import { getWeather, getWeatherFail, getWeatherSuccess } from './actions';
import { fetchWeatherSaga, watchLatest } from './saga';

describe('watch latest fetchWeatherSaga', () => {
  const generator = watchLatest();

  it('should take latest fetchWeatherSaga', () => {
    expect(generator.next().value).toEqual(takeLatest('weather/request', fetchWeatherSaga));
  });

  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('fetchWeatherSaga', () => {
  const city = 'London';
  const action = getWeather(city);

  it('not found location', () => {
    const generator = fetchWeatherSaga(action);
    expect(generator.next().value).toEqual(call(apis.apiRequestLocation, 'London'));
    expect(
      generator.throw({
        message: 'Not found',
      }).value,
    ).toEqual(put(getWeatherFail({ message: 'Not found' })));
  });

  it('found location', async () => {
    const mockLocationResult = {
      data: [
        {
          woeid: 111111,
        },
      ],
    };
    const mockWeatherResult = {
      data: { consolidated_weather: [] },
    };
    const generator = fetchWeatherSaga(action);

    expect(generator.next().value).toEqual(call(apis.apiRequestLocation, 'London'));
    expect(generator.next(mockLocationResult).value).toEqual(call(apis.apiRequestWeather, 111111));
    expect(generator.next(mockWeatherResult).value).toEqual(put(getWeatherSuccess([])));
  });
});
