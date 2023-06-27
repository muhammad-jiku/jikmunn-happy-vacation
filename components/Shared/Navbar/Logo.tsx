'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import logoImg from '../../../assets/images/happy_vacation.png';
import logoImg from '../../../assets/images/happy_vacation1.png';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className='hidden md:block cursor-pointer'
      src={`${logoImg?.src}`}
      height='100'
      width='100'
      alt='Logo'
    />
  );
};

export default Logo;
