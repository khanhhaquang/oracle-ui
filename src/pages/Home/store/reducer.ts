import { TTokenInfo } from '../types';

type THome = {
  isLoading: boolean;
  data: TTokenInfo[] | null;
  selected: number;
  error: any;
};

const initialState: THome = {
  isLoading: false,
  data: null,
  error: null,
  selected: 0,
};

const reducer = (state = initialState, action: { type: string; data?: any }) => {
  switch (action.type) {
    case 'tokens/request':
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case 'tokens/success':
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null,
      };
    case 'tokens/error':
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.data,
      };
    case 'tokens/select':
      return {
        ...state,
        selected: action.data === state.selected ? 0 : action.data,
      };
    default:
      return state;
  }
};
export const getIsLoading = (state: any): boolean => state.home.isLoading;
export const getTokenList = (state: any): Array<TTokenInfo> | null => state.home.data;
export const getSelectedToken = (state: any): number => state.home.selected;

export default reducer;
