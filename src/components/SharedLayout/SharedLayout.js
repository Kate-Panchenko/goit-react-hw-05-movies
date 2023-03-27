import { StyledNavLink, Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle, theme } from 'components/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { ThemeProvider } from 'styled-components';

export const SharedLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={1500} hideProgressBar={true} />
      </Container>
    </ThemeProvider>
  );
};
