'use client';

import { useEffect } from 'react';
import { EmptyState } from '@/components';

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState title='404 - Not Found' subtitle='Something went wrong!' />
  );
};

export default ErrorState;
