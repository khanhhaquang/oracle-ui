import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTokensStart } from '../store/actions';
import { getIsLoading, getTokenList } from '../store/reducer';

const useFetchTokens = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const tokens = useSelector(getTokenList);

  useEffect(() => {
    dispatch(getTokensStart());
  }, []);

  return { isLoading, tokens };
};

export default useFetchTokens;
