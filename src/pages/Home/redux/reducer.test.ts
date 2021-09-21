import { getWeather, getWeatherFail, getWeatherSuccess } from './actions';
import reducer from './reducer';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test('should change when run weather/request', () => {
  const previousState = {
    isLoading: false,
    data: null,
    error: null,
  };
  expect(reducer(previousState, getWeather('foo'))).toEqual({
    ...previousState,
    isLoading: true,
  });
});

test('should change when run weather/success', () => {
  const previousState = {
    isLoading: true,
    data: null,
    error: null,
  };
  expect(reducer(previousState, getWeatherSuccess({ foo: 'bar' }))).toEqual({
    ...previousState,
    isLoading: false,
    data: { foo: 'bar' },
  });
});

test('should change when run weather/fail', () => {
  const previousState = {
    isLoading: true,
    data: null,
    error: null,
  };
  expect(reducer(previousState, getWeatherFail({ message: 'error' }))).toEqual({
    ...previousState,
    isLoading: false,
    error: { message: 'error' },
  });
});
