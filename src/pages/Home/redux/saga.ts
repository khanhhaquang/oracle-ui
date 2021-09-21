import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { apiRequestLocation, apiRequestWeather } from 'pages/Home/requests';
import { CityDataResponse, WeatherDataResponse } from '../types';
import { getWeatherFail, getWeatherSuccess } from './actions';

export function* fetchWeatherSaga(action: { type: string; city: string }): SagaIterator<void> {
  try {
    const locationData: AxiosResponse<CityDataResponse[]> = yield call(
      apiRequestLocation,
      action.city,
    );
    const cityData = locationData?.data[0];

    if (cityData) {
      const weatherData: AxiosResponse<WeatherDataResponse> = yield call(
        apiRequestWeather,
        cityData.woeid,
      );

      yield put(getWeatherSuccess(weatherData.data.consolidated_weather));
      return;
    }

    yield put(
      getWeatherFail({
        message: 'Not found',
      }),
    );
  } catch (error) {
    yield put(getWeatherFail(error));
  }
}

export function* watchLatest() {
  yield takeLatest('weather/request', fetchWeatherSaga);
}

export default watchLatest;
