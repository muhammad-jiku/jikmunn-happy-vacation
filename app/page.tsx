import { ClientOnly, Container } from '@/components';

export default function Home() {
  return (
    <ClientOnly>
      <Container> afag </Container>
    </ClientOnly>
  );
}
