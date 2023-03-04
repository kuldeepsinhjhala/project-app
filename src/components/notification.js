import React, { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Avatar, Button, Stack, Typography } from '@mui/material';

import { updateNotification } from 'utils/api-calls';
import { queryKeys } from 'utils/app-constants';

const Notification = ({ id, image, content, read }) => {
  const { mutateAsync } = useMutation(updateNotification);
  const queryClient = useQueryClient();

  const handleClick = useCallback(async () => {
    try {
      await mutateAsync({
        id,
        body: { read: !read },
      });
      queryClient.invalidateQueries(queryKeys.notifications);
    } catch (err) {
      console.log(err);
    }
  }, [mutateAsync, id, read, queryClient]);

  return (
    <Stack
      py={3}
      px={5}
      direction='row'
      alignItems='center'
      justifyContent='space-between'>
      <Avatar src={image} alt='USER' />
      <Typography variant='body2' fontWeight={read ? 400 : 700}>
        {content}
      </Typography>

      <Button
        color={read ? 'secondary' : 'primary'}
        variant='contained'
        onClick={handleClick}>
        Mark as {read ? 'unread' : 'read'}
      </Button>
    </Stack>
  );
};

export default Notification;
