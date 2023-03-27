import { Link, Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle, theme } from 'components/GlobalStyle';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

export const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={1500} hideProgressBar={true} />
      </Container>
    </ThemeProvider>
  );
};
