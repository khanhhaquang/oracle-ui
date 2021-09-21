export const getWeather = (city: string) => ({
  type: 'weather/request',
  city,
});

export const getWeatherSuccess = (data: any) => ({
  type: 'weather/success',
  data,
});

export const getWeatherFail = (data: any) => ({
  type: 'weather/error',
  data,
});
