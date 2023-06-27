import { ClientOnly } from '@/components';
import '../styles/globals.css';

export const metadata = {
  title: 'Happy Vacation',
  description: 'Online Hotel rooms booking app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClientOnly>afad</ClientOnly>
      <body>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
