import React from 'react';
import { Button, styled } from '@mui/material';

import { Icon } from 'ui';
import { Link } from 'gatsby';

const NavItem = ({ href, icon }) => (
  <Button sx={{ p: 2 }} component={Link} to={href}>
    <Icon name={icon} color='common.black' />
  </Button>
);

const Layout = ({ children }) => {
  return (
    <LayoutGrid>
      <Navigation>
        <NavItem icon='Bell' href='/' />
        <NavItem icon='Send' href='/push' />
      </Navigation>

      <Main>{children}</Main>
    </LayoutGrid>
  );
};

export default Layout;

const LayoutGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '5rem 1fr',
  minHeight: '100vh',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'none',
    alignContent: 'start',
    gridTemplateRows: '5rem 1fr',
    gap: theme.spacing(5),
  },
}));

const Navigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(5, 0),
  flexDirection: 'column',
  boxShadow: '0 1rem 1.5rem rgba(0,0,0,0.3)',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const Main = styled('main')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
}));
