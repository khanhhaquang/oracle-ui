export type TTokenInfo = {
  id: number;
  blockNumber: number;
  transactionIndex: number;
  sources: Array<number>;
  symbol: string;
  slug: string;
  leaseEnd: number;
  subscriptionId: number;
  networkId: number;
  aggregationStrategy: number;
  reportingStrategy: number;
  status: number;
  client: {
    clientType: number;
    connectionInfo: {
      contractAddress: string;
      networkId: number;
    };
  };
  createdTimestamp: string;
  updatedTimestamp: string;
  display: boolean;
};
