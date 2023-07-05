'use client';

import LoginModal from '../Modals/LoginModal';
import RegisterModal from '../Modals/RegisterModal';
import SearchModal from '../Modals/SearchModal';

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <SearchModal />
    </>
  );
};

export default ModalsProvider;
