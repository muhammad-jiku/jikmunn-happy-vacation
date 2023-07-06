import getListingById from '@/actions/getListingById';
import getReservations from '@/actions/getReservations';
import getCurrentUser from '@/actions/getCurrentUser';
import ListingClient from './ListingClient';
import { ClientOnly, EmptyState } from '@/components';

interface IParams {
  listingId?: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default Page;
