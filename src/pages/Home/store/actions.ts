import { TTokenInfo } from '../types';

export const getTokensStart = () => ({
  type: 'tokens/request',
});

export const getTokensSuccess = (data: TTokenInfo[]) => ({
  type: 'tokens/success',
  data,
});

export const getTokensFail = (data: any) => ({
  type: 'tokens/error',
  data,
});

export const selectToken = (id: number) => ({
  type: 'tokens/select',
  data: id,
});
