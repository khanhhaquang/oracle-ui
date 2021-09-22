import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { apiRequestTokens } from 'pages/Home/requests';
import { TTokenInfo } from '../types';
import { getTokensSuccess, getTokensFail } from './actions';

export function* fetchTokenList(): SagaIterator<void> {
  try {
    const tokens: TTokenInfo[] = yield call(apiRequestTokens);

    if (tokens) {
      yield put(getTokensSuccess(tokens));
      return;
    }

    yield put(
      getTokensFail({
        message: 'Not found',
      }),
    );
  } catch (error) {
    yield put(getTokensFail(error));
  }
}

export function* watchLatest() {
  yield takeLatest('tokens/request', fetchTokenList);
}

export default watchLatest;
