import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Item = styled.li`
  width: calc((100% - 32px) / 3);
`;

export const Image = styled.img`
  margin-bottom: 6px;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  color: ${props => props.theme.black};
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const CastItem = styled.li`
  width: calc((100% - 80px) / 5);
`;

export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${props => props.theme.black};
`;

export const ReviewsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Review = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-bottom: 1px solid ${props => props.theme.black};
  padding-bottom: 8px;
`;

export const ReviewInfo = styled.span`
  font-weight: 400;
`;
