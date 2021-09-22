export const getExpiryDate = (
  createdTimestamp: string,
  leaseEnd: number,
  blockNumber: number,
): number => +new Date(createdTimestamp) + 3000 * (leaseEnd - blockNumber);

export const formatNumber = (number: number, type = 'en-IN') =>
  new Intl.NumberFormat(type).format(number);
