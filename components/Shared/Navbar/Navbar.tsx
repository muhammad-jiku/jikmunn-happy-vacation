'use client';

import Logo from './Logo';
import Search from './Search';
import Categories from './Categories';
import UserMenu from './UserMenu';
import { Container } from '@/components';

interface NavbarProps {
  currentUser?: 'SafeUser' | null;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div
        className='
          py-4 
          border-b-[1px]
        '
      >
        <Container>
          <div
            className='
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          '
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;