export const checkMultiAddresses = (recipientString: string) =>
  recipientString.split(',').length > 1;
