import { Link, Container, Header } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { ToastContainer } from 'react-toastify';

export const SharedLayout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={1500} hideProgressBar={true} />
    </Container>
  );
};
