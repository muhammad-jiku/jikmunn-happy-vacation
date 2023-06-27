'use client';

import Image from 'next/image';
import profileImg from '../../assets/images/profile.jpg';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className='rounded-full'
      height='30'
      width='30'
      alt='Avatar'
      src={src || `${profileImg?.src}`}
    />
  );
};

export default Avatar;
