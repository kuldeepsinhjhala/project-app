import React, { useCallback } from 'react';
import { Button, Container, Stack, styled, Typography } from '@mui/material';

import googleImg from 'images/google.png';

const LoginPage = () => {
  const handleLogin = useCallback(() => {
    window.location.assign(
      `${
        process.env.GATSBY_SERVICE_URL
      }/auth/login?sourceUri=${encodeURIComponent(
        `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
      )}`
    );
  }, []);

  return (
    <Container maxWidth='lg'>
      <Stack
        sx={{ height: '100vh' }}
        alignItems='center'
        justifyContent='center'
        gap={10}>
        <Typography variant='h2' textAlign='center'>
          Create your account to use this application
        </Typography>

        <GoogleButton
          variant='filled'
          startIcon={<GoogleLogo src={googleImg} alt='GOOGLE LOGO' />}
          onClick={handleLogin}>
          Continue with google
        </GoogleButton>
      </Stack>
    </Container>
  );
};

export default LoginPage;

export const Head = () => <title>Login</title>;

const GoogleButton = styled(Button)(({ theme }) => ({
  boxShadow: theme.shadows[15],
}));

const GoogleLogo = styled('img')({
  height: '1.5rem',
  width: '1.5rem',
});
