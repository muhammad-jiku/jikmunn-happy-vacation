import { ClientOnly, Container } from '@/components';

const Home = async () => {
  return (
    <ClientOnly>
      <Container> afag </Container>
    </ClientOnly>
  );
};

export default Home;
