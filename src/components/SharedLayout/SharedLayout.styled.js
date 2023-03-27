import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  margin-bottom: 16px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.accent};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: ${props => props.theme.black};
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.border};
  }

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.border};
  }
`;

export const Title = styled.h1`
  margin-bottom: 18px;
  color: ${props => props.theme.black};
  text-align: center;
`;
