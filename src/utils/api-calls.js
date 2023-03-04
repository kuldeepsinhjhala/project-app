import axios from 'services/api';

export const getMe = async () => {
  const {
    data: { data },
  } = await axios.get('/users/me');
  return data;
};

export const getNotifications = async () => {
  const {
    data: { data },
  } = await axios.get('/notifications');
  return data;
};

export const getSentNotifications = async () => {
  const {
    data: { data },
  } = await axios.get('/notifications/sent');
  return data;
};

export const updateNotification = async ({ id, body }) => {
  const {
    data: { data },
  } = await axios.patch(`/notifications/${id}`, body);
  return data;
};

export const markAllAsRead = async () => axios.patch('/notifications/read-all');

export const getAllUsers = async () => {
  const {
    data: { data },
  } = await axios.get('/users');

  return data;
};

export const pushNotifiation = async body =>
  axios.post('/notifications', {
    ...body,
    type: 'follow',
    content: `Just a test notification at ${Date.now()}`,
  });
