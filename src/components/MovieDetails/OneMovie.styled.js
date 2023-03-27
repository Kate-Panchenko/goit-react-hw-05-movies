import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Poster = styled.img`
  width: 320px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${props => props.theme.black};
`;

export const Genres = styled.ul`
  display: flex;
  gap: 12px;
`;
