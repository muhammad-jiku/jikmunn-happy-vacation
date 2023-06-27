import { ClientOnly, Container } from '@/components';

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        {' '}
        <div
          className='
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          '
        >
          <h1>Hello there</h1>
        </div>
      </Container>
    </ClientOnly>
  );
}
