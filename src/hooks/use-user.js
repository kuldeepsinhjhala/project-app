import { useQuery } from 'react-query';

import { getMe } from 'utils/api-calls';
import { queryKeys } from 'utils/app-constants';

const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery(queryKeys.me, getMe, {
    retry: false,
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  return { user, isLoading, error };
};

export default useUser;
