import { Button, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getAllUsers, pushNotifiation } from '../utils/api-calls';
import RouteGuard from '../components/route-guard';
import useUser from 'hooks/use-user';
import { queryKeys } from 'utils/app-constants';

const PushPage = () => {
  const { data: users } = useQuery('users', getAllUsers);
  const { user } = useUser();
  const [receiver, setReceiver] = useState(() => users?.[0].id);
  const queryClient = useQueryClient();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!user) return;
    await pushNotifiation({
      sender: user.id,
      receiver,
    });
    queryClient.invalidateQueries(queryKeys.notifications);
  };

  return (
    <RouteGuard>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10rem',
          padding: '5rem',
        }}
        onSubmit={handleSubmit}>
        <Select value={receiver} onChange={e => setReceiver(e.target.value)}>
          {users?.map(user => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>

        <Button type='submit' variant='contained'>
          Push notification
        </Button>
      </form>
    </RouteGuard>
  );
};

export default PushPage;
