import React from 'react';
import { navigate } from 'gatsby';
import { CircularProgress } from '@mui/material';

import useUser from 'hooks/use-user';

const RouteGuard = ({ children }) => {
  const { isLoading, error } = useUser();

  if (isLoading) return <CircularProgress />;

  if (error) {
    typeof window !== 'undefined' && navigate('/login');
    return <CircularProgress />;
  }

  return children;
};

export default RouteGuard;
