import getCurrentUser from '@/actions/getCurrentUser';
import '../styles/globals.css';
import { ClientOnly, LoginModal, RegisterModal, Navbar } from '@/components';

export const metadata = {
  title: 'Happy Vacation',
  description: 'Online Hotel rooms booking app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
