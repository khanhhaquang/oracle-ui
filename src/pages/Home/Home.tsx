import { Title, Card, Loading } from './components';
import { getExpiryDate } from './helpers';
import './Home.scss';
import useFetchTokens from './hooks/useGetTokens';

const Home = () => {
  const { isLoading, tokens } = useFetchTokens();

  return (
    <main className="home">
      <Title />
      <section className="grid">
        {isLoading && <Loading />}
        {tokens?.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            name={data.symbol}
            status={data.status}
            expiryDate={getExpiryDate(data.createdTimestamp, data.leaseEnd, data.blockNumber)}
            logo="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
            price={3074.92}
          />
        ))}
      </section>
    </main>
  );
};
export default Home;
