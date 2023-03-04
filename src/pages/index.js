import * as React from 'react';
import { useQuery, useQueryClient } from 'react-query';

import RouteGuard from 'components/route-guard';
import Notification from 'components/notification';
import { queryKeys } from 'utils/app-constants';
import { getNotifications } from 'utils/api-calls';
import { Button, CircularProgress } from '@mui/material';
import { markAllAsRead } from '../utils/api-calls';

const IndexPage = () => {
  const queryClient = useQueryClient();

  const { data: notifications } = useQuery(
    queryKeys.notifications,
    getNotifications,
    {
      refetchInterval: 10000,
    }
  );

  const handleClick = async () => {
    await markAllAsRead();
    queryClient.invalidateQueries(queryKeys.notifications);
  };

  return (
    <RouteGuard>
      <Button
        variant='contained'
        onClick={handleClick}
        disabled={!notifications?.some(noti => !noti.read)}>
        Mark all as read
      </Button>

      {notifications?.map(noti => (
        <Notification key={noti.id} {...noti} image={noti.receiver.picture} />
      )) || <CircularProgress />}
    </RouteGuard>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
