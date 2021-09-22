import getTokensMockData from './__mocks__/tokenLists';

export const apiRequestTokens = () =>
  new Promise((resolve) => setTimeout(() => resolve(getTokensMockData()), 3000));
