import { WeatherData } from '../types';

type THome = {
  isLoading: boolean;
  data: WeatherData[] | null;
  error: any;
};

const initialState: THome = {
  isLoading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action: { type: string; data?: any }) => {
  switch (action.type) {
    case 'weather/request':
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case 'weather/success':
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null,
      };
    case 'weather/error':
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.data,
      };
    default:
      return state;
  }
};

export const getErrorMessage = (state: any): string => state.home.error?.message || '';
export const getWeatherData = (state: any): WeatherData[] | [] => state.home.data || [];
export const getIsLoading = (state: any): boolean => state.home.isLoading;

export default reducer;
